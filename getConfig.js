const getConfig = (easy_children, middle_children, hard_children) => (
`module.exports = {
  title: "leetcode-records",
  description: '',
  base: '/leetcode-records/',
  port: 8686,
  themeConfig: {
    nav: [
      { text: 'Github', link: 'https://github.com/Hellottxo' },
      { text: 'XO-UI', link: 'http://xo.silenttt.top/xo-ui' },
    ],
    sidebar: [
      {
        title: 'easy',
        collapsable: false,
        children: [${easy_children}
        ]
      },
      {
        title: 'middle',
        collapsable: false,
        children: [${middle_children}]
      },
      {
        title: 'hard',
        collapsable: false,
        children: [${hard_children}]
      }
    ],
    lastUpdated: 'Last Updated',
  },
}`);

module.exports = {
  getConfig
};
