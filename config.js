let url = '/files.json';
fetch(url)
  .then(response => response.json())
  .then(data => {
    new Docute({
      title: '琴理运维笔记',
      theme: 'dark',
      highlight: ['python', 'go', 'c', 'cpp', 'bash','vue','react'],
      darkThemeToggler: true,
      sidebar: data,
      nav: [
        {
          title: 'Home',
          link: '/'
        },
        {
          title: 'GitHub',
          link: 'https://github.com/egoist/docute'
        }
      ],

      footer: `Build By <a href="http://www.fzf404.top">fzf<ExternalLinkIcon /></a>, Power by <a href="http://ql.sylu.edu.cn/index/">qlstudio<ExternalLinkIcon /></a>`
    })

  })

