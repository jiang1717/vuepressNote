module.exports = {
  title: 'Road to Cover',
  description: 'Good Good Study',
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
      { text: 'JavaSE', link: '/JavaSE/' },
      { text: 'MySQL', link: '/MySQL/'},
      { text: 'Redis', link: '/Redis/'},
      { text: '计算机网络', link: '/Network/'},
      { text: '操作系统', link: '/OperatingSystem/' },
      { text: '数据结构与算法', link: '/DataStructure/'}
    ],
    displayAllHeaders: false,
    sidebarDepth: 2, // 侧边栏显示2级
    collapsable: true,
    docsRepo: 'jiang1717/vuepressNote/',
    docsDir: '/',
    sidebar:{

      '/JavaSE/':[
        {
          title: 'Java基础知识',  //组名
          children: ['基础01', '基础02', '基础03', '基础04'],   //该分组下要显示的文件的目录
        },
        {
          title: 'Java集合框架',
          children: ['02_Java集合框架'],
        },
        {
          title: 'Java多线程',
          children: ['03_Java多线程'],
        },
        {
          title: 'Java虚拟机',
          children: ['04_Java虚拟机'],
        },
        {
          title: '设计模式',
          children: ['05_设计模式'],
        }],

       '/DataStructure/':[
        {
          title: '剑指offer',  //组名
          children: ['剑指001', '剑指002'],   //该分组下要显示的文件的目录
        },
        {
          title: 'leetcode',
          children: ['leetcode'],
        }],
    }
  }
}
