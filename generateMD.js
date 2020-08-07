const fs = require('fs');
const path = require('path');
const { getQuestionCategory, getDetailByURL } = require('./getleetcode');
const { getConfig } = require('./getConfig');

const solutionsDir = path.join(__dirname, './JS-solutions');
const configDir = path.join(__dirname, './docs/.vuepress/config.js');

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
  
  tasks.forEach(async (e) => {
    const { title, content } = await getDetailByURL(e.url);
    const name = `${e.id}. ${title}`.trim();
    config_map[e.level] += `
    '${e.level}/${title}',`
    fs.writeFileSync(
      `docs/${e.level}/${name}.md`,
      `# ${name}
${content}
${e.solutions}
      `
    );
  });
  const configText = getConfig(config_map.easy, config_map.middle, config_map.hard);
  fs.writeFileSync(configDir, configText);
}


initialize();
