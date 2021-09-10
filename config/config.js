let url = './config/files.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    data.push({ title: '关于本站', link: "/README" })
    new Docute({
      title: 'Docute-侧边栏生成器',
      theme: 'dark',
      highlight: ['visual-basic','powershell'],
      darkThemeToggler: true,
      cssVariables(theme) {
        return theme === 'dark' ? {
          pageBackground: '#2B313A',
          headerBackground: '#161B22',
          sidebarBackground: '#1F2428',
          mainBackground: '#24292E',

          headerTextColor: '#F9826C',

          sidebarLinkActiveColor: 'var(--accent-color)',
          sidebarLinkArrowColor: '#F9826C',
          sidebarWidth: '240px',
        } : {}
      },
      sidebar: data,
      nav: [
        {
          title: '首页',
          link: '/'
        },
      ],
      footer: `Build By <a href="https://www.fzf404.top">fzf<ExternalLinkIcon /></a>, Power by <a href="https://github.com/egoist/docute">docute<ExternalLinkIcon /></a>`
    })
  })

