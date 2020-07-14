
const fs = require("fs");
const path = require("path");

const root = path.join(__dirname);
const url = 'https://github.com/Hellottxo/leetcode-records/blob/master';
const list = {};

function readDirSync(path, parent) {
    const pa = fs.readdirSync(path);
    pa.forEach((ele) => {
        const info = fs.statSync(path + "/" + ele)
        if (info.isDirectory() && /^[^.]/.test(ele)) {
            parent[ele] = {};
            readDirSync(path + "/" + ele, parent[ele]);
        } else {
            const reg = /Q\d+/;
            if (reg.test(ele)) parent[ele] = true;
        }
    })
}

function getFileContent(c, depth, path) {
    let res = `\r\n`;
    Object.entries(c).forEach(([key, value]) => {
        if (depth < 3 && Object.values(value).length > 0) {
            res += `\r\n${(' ').padStart(depth + 1, '#')}${key}${getFileContent(value, depth + 1, `${path || ''}/${key}`)}`;
        }
        if (depth === 3) {
            res += `\r\n- 💡[${key}](${url}${path}/${key})`;
        }
    });
    return `${res}\r\n`;
}

readDirSync(root, list);
fs.writeFileSync(
    'README.md',
    `# LeetCode Records
    leetCode做题记录📝
    ${getFileContent(list, 1)}`,
    (err) => {
        if (err) console.log(err);
        console.log('success!');
    });
