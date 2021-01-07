module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  plugins: [
        '@vuepress/back-to-top',
        '@vuepress/last-updated0',
        ['vuepress-plugin-mathjax'],
        {
          target: 'chtml',
          macros: {
            '*': '\\times',
          },
        },
  ],
  base: '/vuepressNote/',
  themeConfig: {
    nav: [
      { text: 'Java基础', link: '/JavaFundamental/' },
      { text: 'JVM', link: '/JVM/' },
      { text: 'Java并发', link: '/JavaConcurrency/'},
      { text: '数据库', link: '/DataBase/'},
      { text: 'Redis缓存', link: '/Redis/'},
      { text: '设计模式', link: '/DesignPattern/'},
      { text: '计算机网络', link: '/Network/'},
      { text: '操作系统', link: '/OperatingSystem/' },
      { text: '数据结构与算法', link: '/DataStructure/'}
    ],
    displayAllHeaders: false,
    sidebar: 'auto', // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
    collapsable: true,
    docsRepo: 'jiang1717/vuepressNote/',
    docsDir: '/'
  }
}
