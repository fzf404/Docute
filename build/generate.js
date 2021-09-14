const fs = require('fs')
const path = require('path')

function GenerateSideBar(dir) {
  return fs.readdirSync(dir).map((file) => {
    const full = path.join(dir, file)
    const stat = fs.statSync(full)
    if (stat.isDirectory()) {
      return GenerateSideBar(path.join(dir, item)) //递归读取文件
    } else if (file.endsWith('.md')) {
      console.log(full)
      return {
        title: file.replace('.md', ''),
        link: '/' + full.replace(/.md/g, ''),
      }
    }
  })
}

fs.writeFile('./static/custom.json', JSON.stringify(GenerateSideBar('./docs/', false), '', '\t'), (err) => {
  if (err) {
    console.log('操作失败：', err.message)
  } else {
    console.log('操作成功！')
  }
})
