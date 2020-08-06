const puppeteer = require('puppeteer');
const fs = require('fs');
const ProgressBar = require('progress');
const MAX_TAB = 4;

const TABLE_SELECTOR = 'table>tbody:first-of-type>tr';
const TOTALCHG_SELECTOR = 'select.form-control';
const DETAIL_SELECTOR = '.notranslate';

const init = async () => (
  await puppeteer.launch({
    // headless: false,
    args: [
      '–disable-gpu',
      '–disable-dev-shm-usage',
      '–disable-setuid-sandbox',
      '–no-first-run',
      '–no-sandbox',
      '–no-zygote',
      '–single-process'
    ]
  })
);

const getQuestionsList = async () => {
  const browser = await init();
  const page = await browser.newPage();
  await page.goto('https://leetcode-cn.com/problemset/all/');
  await page.waitFor(TOTALCHG_SELECTOR);
  await page.select(TOTALCHG_SELECTOR, '9007199254740991');
  await page.waitFor(500);
  const res = await page.evaluate((table) => {
    const list = {};
    Array.prototype.slice.apply(document.querySelectorAll(table))
      .forEach(($item) => {
        const td = $item.querySelectorAll('td');
        const id = td[1].innerText;
        const name = td[2];
        if (name.querySelector('.question-disabled')) return;
        list[id] = { id, name: name.innerText, url: name.querySelector('a').href };
      });
    return list;
  }, TABLE_SELECTOR);
  await browser.close();
  return res;
};


const getQuestionsDetails = async (tasks) => {
  let details = [];
  const bar = new ProgressBar('\r\n正在爬行🐞 :percent [:bar] :current/:total', {
    complete: '█',
    incomplete: '░',
    width: 30,
    total: tasks.length
  });
  for (let i = 0; i < tasks.length; i += MAX_TAB) {
    const browser = await init();
    const promises = [];
    for (let j = 0; j < MAX_TAB; j++) {
      let elem = i + j;
      if (tasks[elem]) {
        bar.tick();
        promises.push(browser.newPage().then(async (page) => {
          await page.goto(tasks[elem].url, {
            timeout: 0,
            waitUntil: 'networkidle2'
          });
          return await page.evaluate((d, e) => {
            const items = document.querySelectorAll(d);
            return {
              dir: e.dir,
              content: items[1] ? `# ${e.title}
    ${items[1].innerText}
${e.content}` : ''
            };
          }, DETAIL_SELECTOR, tasks[elem]);
        }));
      }
    }
    await Promise.all(promises).then((values) => {
      details = [...details, ...values];
      details.forEach(({ dir, content }) => {
        fs.writeFileSync(
          dir,
          content,
          (err) => {
            if (err) console.log(err);
            console.log('success!');
          });
      });
    });
    await browser.close();
  }
};

module.exports = {
  getQuestionsList,
  getQuestionsDetails
};

