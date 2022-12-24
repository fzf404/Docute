const fs = require('fs')
const path = require('path')

function GenerateSideBar(dir) {
  // 遍历文件夹
  return fs.readdirSync(dir).map((file) => {
    // 文件绝对路径
    const full = path.join(dir, file)
    // 是否为文件
    if (file.endsWith('.md')) {
      // 打印信息
      console.info(full)
      // 返回路径
      return {
        title: file.replace('.md', ''),
        link: '/' + full.replace(/.md/g, ''),
      }
      // 是否为文件夹
    } else if (fs.statSync(full).isDirectory()) {
      // 递归返回路径
      return {
        title: full.slice(full.lastIndexOf('/') + 1, full.length),
        children: GenerateSideBar(full),
      }
    }
  })
}

const sidebar = [
  {
    title: '介绍',
    link: '/README.md',
  },
  ...GenerateSideBar(path.join('docs')),
]

fs.writeFile('./static/custom.json', JSON.stringify(sidebar, '', '\t'), (err) => {
  if (err) {
    console.log('操作失败！')
  } else {
    console.log('操作成功！')
  }
})
