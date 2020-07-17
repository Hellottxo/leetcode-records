
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, './JS-solutions');
const URL = 'https://github.com/Hellottxo/leetcode-records/blob/master/JS-solutions';
const EMOJI = {
    easy: '😊',
    middle: '🤔️',
    hard: '😢'
}
const list = {};

function readDirSync(path, parent) {
    const pa = fs.readdirSync(path);
    pa.forEach((ele) => {
        const info = fs.statSync(path + "/" + ele)
        if (info.isDirectory()) {
            parent[ele] = [];
            readDirSync(path + "/" + ele, parent[ele]);
        } else {
            parent.push(ele);
        }
    })
}

function getFileContent(c) {
    const space = `\r\n`;
    let res = space;
    Object.entries(c).forEach(([key, value]) => {
        if (key === 'util') return;
        res += `${space}# ${EMOJI[key]} ${key}`;
        value.forEach((e) => {
            res += `${space}- [${e}](${URL}${key}/${e})${space}`
        })
    });
    return `${res}\r\n`;
}

readDirSync(root, list);
fs.writeFileSync(
    'README.md',
    `# Leetcode Records
[leetcode](https://leetcode-cn.com/)算法题记录📝
| Easy | Middle | Hard |
| ---- | ------ | ---- |
| [😊](##easy)    | [🤔️](#middle)      | [😢](#hard)    |
    ${getFileContent(list)}`,
    (err) => {
        if (err) console.log(err);
        console.log('success!');
    });
