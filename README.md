
## docute-sidebar-maker

> 用于渲染markdown文件，方便部署
>
> [案例](https://share.fzf404.top/#/)
>
> [案例源码](https://github.com/fzf404/share)

## 使用

1. 在项目目录中新建任意名称文件夹。
2. 在文件夹中新建任意名称md文件，并写入需要展示的文本。
3. 安装nodejs，并运行命令`node make.js`，接下来就可以在浏览器中访问了

<Note type="tip">

网站标题以及更多设置，请修改`config\config.js`文件，样式以及log请修改`static`目录下内容

</Note>

## 部署

> 嫌麻烦可尝试腾讯[Webfiy](https://webify.cloudbase.net/)

1. fork本项目，clone至本地计算机，添加markdown文件，并推送到git仓库。
2. 服务器Clone本项目，并执行make.js
3. 在Github及服务器中配置webhook，这样就可以同步更新了。

### Webfiy

1. fork本项目，clone至本地计算机，添加markdown文件，并推送到git仓库。
2. 在`webify`中点击新建应用，输入git仓库地址
3. 框架预设选自定义，构建命令填`node make.js`，输出目录填`.`，安装命令不用填
4. 接着等待部署完成
5. 每次在本地更新并推送至远程端后，将会自动更新网站内容。

