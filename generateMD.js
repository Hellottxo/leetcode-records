const fs = require('fs');
const path = require('path');
const spider = require('./spider');
const { getConfig } = require('./getConfig');

const solutionsDir = path.join(__dirname, './JS-solutions');
const configDir = path.join(__dirname, './docs/.vuepress/config.js');

const readDirSync = (path, parent) => {
  const pa = fs.readdirSync(path);
  pa.forEach((ele) => {
    const elePath = `${path}/${ele}`;
    const info = fs.statSync(elePath);
    if (info.isDirectory()) {
      parent[ele] = [];
      readDirSync(elePath, parent[ele]);
    } else if (/Q\d+/g.test(ele)) {
      const item = {
        id: ele.slice(1, -3),
        content: '```js\r\n' + fs.readFileSync(elePath).toString() + '\r\n```',
      }
      parent.push(item);
    }
  })
}

const initialize = async () => {
  const map = {};
  readDirSync(solutionsDir, map);
  const total = await spider.getQuestionsList();
  const tasks = [];
  let config_map = {
    easy: '',
    middle: '',
    hard: ''
  };
  Object.entries(map).forEach(([key, value]) => {
    if (value.length > 0) {
      value.forEach((v) => {
        const item = total[v.id];
        const title = `${item.id}. ${item.name}`.trim();
        config_map[key] += `
          '${key}/${title}',`;
        tasks.push({
          ...item,
          content: v.content,
          dir: `docs/${key}/${title}.md`,
          title
        });
      })
    }
  });
  const configText = getConfig(config_map.easy, config_map.middle, config_map.hard);
  fs.writeFileSync(configDir, configText);
  spider.getQuestionsDetails(tasks);
}


initialize();
