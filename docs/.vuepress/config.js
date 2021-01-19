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
  head: [['link', { rel: 'icon', href: './logo.png' }]],
  base: '/',
  themeConfig: {
    displayAllHeaders: false,
    sidebarDepth: 2, // 侧边栏显示2级
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    collapsable: true,
    docsRepo: 'jiang1717/vuepressNote/',
    docsDir: '/',
    nav: [
      { text: '主页', link: '/' },
      { text: '后端学习',
        items:[
	{text: 'Java', link: '/be/java/'},
	{text: 'JVM', link: '/be/JVM/'},
	{text: 'MySQL', link: '/be/mysql/'},
	{text: '设计模式', link: '/be/designPattern/'},
	{text: 'Redis', link: '/be/redis/'}
        ] ,},
      { text: '基础学习',
        items:[
	{text: '计算机网络', link: '/fundamental/network/'},
	{text: '操作系统', link: '/fundamental/operatingSystem/'}
        ] ,},
      { text: '算法学习',
        items:[
	{text: '剑指offer', link: '/algorithm/swoffer/'},
	{text: 'leetcode', link: '/algorithm/leetcode/'}
        ] ,}
    ],

    sidebar:{

      '/be/java/':[
        {
          title: 'Java基础',  //组名
          children: ['基础01', '基础02', '基础03', '基础04', '基础05', '基础06'],   //该分组下要显示的文件的目录
        },
        {
          title: 'Java集合',
          children: ['02_Java集合'],
        },
        {
          title: 'Java多线程',
          children: ['03_Java多线程'],
        }],

        '/be/JVM/':[
        {
          title: 'Java虚拟机',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/be/mysql/':[
        {
          title: 'MySQL',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/be/designPattern/':[
        {
          title: '设计模式',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/be/redis/':[
        {
          title: 'Redis',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/fundamental/network/':[
        {
          title: '计算机网络',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/fundamental/operatingSystem/':[
        {
          title: '操作系统',  //组名
          children: [ ],   //该分组下要显示的文件的目录
        }],

        '/algorithm/swoffer/':[
        {
          title: 'LinkedList',  //组名
          children: ['003', '014', '015'],   //该分组下要显示的文件的目录
        }],

       '/algorithm/leetcode/':[
        {
          title: 'leetcode',
          children: [ ],
        }],
    }
  }
}
