const fs = require('fs');
const path = require('path');

const pathName = '.';  // 需遍历的文件夹路径a
const jsonPath = './config/files.json';  // 生成 json 的文件路径
const ignoreList = ['.git', 'config', 'static'] // 忽略的路径

function readFileList(dir, rootRecord = true) {
  let filesList = []
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let fullPath = path.join(dir, item);
    let stat = fs.statSync(fullPath);
    let ignore = false;
    ignoreList.forEach(ignoreItem => item.endsWith(ignoreItem) ? ignore = true : ignore);
    if (ignore) {
      return
    } else if (stat.isDirectory()) {
      filesList.push(readFileList(path.join(dir, item)));  //递归读取文件
    } else if (rootRecord && item.endsWith('.md')) {
      filesList.push({
        title: item.replace('.md', ''),
        link: '/' + fullPath.replace(/.md/g, '')
      });
    }
  });
  return rootRecord ? {
    title: dir.substr(dir.lastIndexOf('/') + 1, dir.length),
    children: filesList
  } : filesList;
}

filesList = readFileList(pathName, false)

fs.writeFile(jsonPath, JSON.stringify(filesList, '', '\t'), err => err);
console.log('成功')