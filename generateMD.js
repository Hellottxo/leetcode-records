const fs = require('fs');
const path = require('path');
const { getQuestionCategory, getDetailByURL } = require('./getleetcode');
const { getConfig } = require('./getConfig');

const solutionsDir = path.join(__dirname, './JS-solutions');
const configDir = path.join(__dirname, './docs/.vuepress/config.js');
const EMOJI = {
  easy: '😊',
  middle: '🤔️',
  hard: '😢'
}

const readDirSync = (path, level) => {
  let res = [];
  const pa = fs.readdirSync(path);
  pa.forEach((ele) => {
    const elePath = `${path}/${ele}`;
    const info = fs.statSync(elePath);
    if (info.isDirectory()) {
      res = [...res, ...readDirSync(elePath, ele)];
    } else if (/Q\d+/g.test(ele)) {
      const item = {
        id: ele.slice(1, -3),
        solutions: '```js\r\n' + fs.readFileSync(elePath).toString() + '\r\n```',
        level
      }
      res.push(item);
    }
  })
  return res;
}

const initialize = async () => {
  const mySolutions = readDirSync(solutionsDir);
  const question_map = await getQuestionCategory();
  let config_map = {
    easy: '',
    middle: '',
    hard: ''
  };
  const tasks = mySolutions.map((v) => ({
    ...v,
    ...question_map[v.id],
  }));
  
  await Promise.all(tasks.map(async (e) => {
    const { title, content } = await getDetailByURL(e.url);
    const name = `${e.id}. ${title}`.trim();
    fs.writeFileSync(
      `docs/${e.level}/${e.id}.md`,
      `# ${name}
## Question
${content}
## Answer
${e.solutions}
      `
    );
    config_map[e.level] += `
          '${e.level}/${e.id}',`
  }));
  const configText = getConfig(config_map.easy, config_map.middle, config_map.hard);
  fs.writeFileSync(configDir, configText);
  fs.writeFileSync(
    './docs/README.md', 
    `---
home: false
footer: I'm the hero of interest
meta:
  - name: leetcode-records
    content: leetcode records
  - name: js/leetcode
    content: js/leetcode
---`
    );
  fs.writeFileSync(
    './docs/.vuepress/styles/palette.styl',
    `$accentColor = #f48024;
.content__default pre {
    color: #999;
}

.navbar .site-name {
    color: #f48024;
}
    `
    );
}


initialize();
