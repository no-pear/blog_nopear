module.exports = {
  title: '不梨博客',
  description: 'This is a blog example built by VuePress',
  theme: '@vuepress/theme-blog', // OR shortcut: @vuepress/blog
  base: '/blog_nopear/'
  themeConfig: {
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#modifyblogpluginoptions
     */
    modifyBlogPluginOptions(blogPluginOptions) {
      return blogPluginOptions
    },
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#nav
     */
    nav: [
      {
        text: 'Blog',
        link: '/',
      },
      {
        text: 'Tags',
        link: '/tag/',
      },
    ],
    /**
     * Ref: https://vuepress-theme-blog.ulivz.com/#footer
     */
    footer: {
      contact: [
        {
          type: 'github',
          link: 'https://github.com/ulivz',
        },
        {
          type: 'twitter',
          link: 'https://twitter.com/_ulivz',
        },
      ],
      copyright: [
        {
          text: 'Privacy Policy',
          link: 'https://policies.google.com/privacy?hl=en-US',
        },
        {
          text: 'MIT Licensed | Copyright © 2018-present Vue.js',
          link: '',
        },
      ],
    },
  },
  sidebar: 'auto', // 侧边栏配置
  sidebarDepth: 2, // 侧边栏显示2级
  // themeConfig: {
  //   nav:[ // 导航栏配置
  //     {text: '前端基础', link: '/accumulate/' },
  //     {text: '算法题库', link: '/algorithm/'},
  //     {text: '微博', link: 'https://baidu.com'}      
  //   ],
  //   sidebar: 'auto', // 侧边栏配置
  //   sidebarDepth: 2, // 侧边栏显示2级
  // }

}
