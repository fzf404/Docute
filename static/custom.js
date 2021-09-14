const nav = [
  {
    title: '首页',
    link: '/',
  },
]

// 获取 SideBar
fetch('./static/custom.json')
  .then((res) => {
    return res.json()
  })
  .then((sidebar) => {
    // 初始化 Docute
    new Docute({
      title: 'Docute',
      theme: 'dark',
      highlight: [],
      darkThemeToggler: true,
      cssVariables(theme) {
        return theme === 'dark'
          ? {
              pageBackground: '#2B313A',
              headerBackground: '#161B22',
              sidebarBackground: '#1F2428',
              mainBackground: '#24292E',

              headerTextColor: '#F9826C',

              sidebarLinkActiveColor: 'var(--accent-color)',
              sidebarLinkArrowColor: '#F9826C',
              sidebarWidth: '240px',
            }
          : {}
      },
      nav: nav,
      sidebar: [...sidebar],
      footer: `Build by <a href="https://fzf404.art">fzf404 <ExternalLinkIcon /> </a>, Power by <a href="https://github.com/egoist/docute">docute <ExternalLinkIcon /> </a>`,
    })
  })
