module.exports = {
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
        children: [
          'easy/1010. 总持续时间可被 60 整除的歌曲',
          'easy/1013. 将数组分成和相等的三个部分',
          'easy/1103. 分糖果 II',
          'easy/1189. “气球” 的最大数量',
          'easy/121. 买卖股票的最佳时机',
          'easy/122. 买卖股票的最佳时机 II',
          'easy/136. 只出现一次的数字',
          'easy/189. 旋转数组',
          'easy/217. 存在重复元素',
          'easy/219. 存在重复元素 II',
          'easy/26. 删除排序数组中的重复项',
          'easy/5. 最长回文子串',
          'easy/70. 爬楼梯',
          'easy/824. 山羊拉丁文',
          'easy/897. 递增顺序查找树',
        ]
      },
      {
        title: 'middle',
        collapsable: false,
        children: [
          'middle/1011. 在 D 天内送达包裹的能力',
          'middle/1026. 节点与其祖先之间的最大差值',
          'middle/1186. 删除一次得到子数组最大和',
          'middle/284. 顶端迭代器',
          'middle/3. 无重复字符的最长子串',
          'middle/43. 字符串相乘',
          'middle/49. 字母异位词分组',
          'middle/5. 最长回文子串',
          'middle/50. Pow(x, n)',
          'middle/553. 最优除法',
          'middle/73. 矩阵置零',
          'middle/792. 匹配子序列的单词数',
          'middle/89. 格雷编码',
          'middle/950. 按递增顺序显示卡牌',
          'middle/955. 删列造序 II',]
      },
      {
        title: 'hard',
        collapsable: false,
        children: [
          'hard/466. 统计重复个数',
          'hard/870. 优势洗牌',
          'hard/871. 最低加油次数',
          'hard/906. 超级回文数',]
      }
    ],
    lastUpdated: 'Last Updated',
  },
}