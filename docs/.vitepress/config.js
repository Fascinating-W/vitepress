/*
 * @Author: Wanko
 * @Date: 2024-04-30 14:41:18
 * @LastEditors: Wanko
 * @LastEditTime: 2024-05-08 14:44:22
 * @Description:
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // base,
  // base = '/vitepress/'
  title: 'VitePress',
  description: 'VitePress | 由 Vite 和 Vue 驱动的静态站点生成器',
  lastUpdated: true,

  themeConfig: {
    siteTitle: 'VitePress',
    logo: '/vitepress-logo-mini.svg',
    editLink: {
      pattern: 'https://github.com/Fascinating-W/vitepress/edit/master/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },
    outlineTitle: '大纲',
    outline: [2, 6],
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/什么是VitePress' },
      { text: '参考', link: '/reference/站点配置' },
      { text: '例子', link: '/markdown-examples' },
      {
        text: '下拉框',
        items: [
          { text: '下拉框1', link: '/dropdown/dropdown1' },
          { text: '下拉框2', link: '/dropdown/dropdown2' }
        ]
      }
    ],
    sidebar: {
      '/reference/': [
        {
          text: '参考',
          items: [
            { text: '站点配置', link: '/reference/站点配置' },
            { text: 'frontmatter配置', link: '/reference/frontmatter配置' },
            { text: '运行时API', link: '/reference/运行时API' },
            { text: 'CLI', link: '/reference/CLI' },
            {
              text: '默认主题',
              items: [
                { text: '概览', link: '/reference/概览' },
                { text: '导航栏', link: '/reference/导航栏' },
                { text: '侧边栏', link: '/reference/侧边栏' },
                { text: '主页', link: '/reference/主页' },
                { text: '页脚', link: '/reference/页脚' },
                { text: '布局', link: '/reference/布局' },
                { text: '徽章', link: '/reference/徽章' },
                { text: '团队页', link: '/reference/团队页' },
                { text: '上下页链接', link: '/reference/上下页链接' },
                { text: '编辑链接', link: '/reference/编辑链接' },
                { text: '最后更新时间戳', link: '/reference/最后更新时间戳' },
                { text: '搜索', link: '/reference/搜索' },
                { text: 'Carbon Ads', link: '/reference/Carbon Ads' }
              ]
            }
          ]
        }
      ],
      '/guide/': [
        {
          text: '简介',
          collapsed: false,
          items: [
            { text: '什么是VitePress', link: '/guide/什么是VitePress' },
            { text: '快速开始', link: '/guide/快速开始' },
            { text: '路由', link: '/guide/路由' },
            { text: '部署', link: '/guide/部署' }
          ]
        },
        {
          text: '写作',
          collapsed: false,
          items: [
            { text: 'Markdown扩展', link: '/guide/Markdown扩展' },
            { text: '资源处理', link: '/guide/资源处理' },
            { text: 'frontmatter', link: '/guide/frontmatter' },
            { text: '在Markdown中使用Vue', link: '/guide/在Markdown中使用Vue' },
            { text: '国际化', link: '/guide/国际化' }
          ]
        },
        {
          text: '自定义',
          collapsed: false,
          items: [
            { text: '自定义主题', link: '/guide/自定义主题' },
            { text: '扩展默认主题', link: '/guide/扩展默认主题' },
            { text: '构建时数据加载', link: '/guide/构建时数据加载' },
            { text: 'SSR兼容性', link: '/guide/SSR兼容性' },
            { text: '链接CMS', link: '/guide/链接CMS' }
          ]
        },
        {
          text: '实验性功能',
          collapsed: false,
          items: [
            { text: 'MPA模式', link: '/guide/MPA模式' },
            { text: 'sitemap生成', link: '/guide/sitemap生成' }
          ]
        },
        {
          text: '配置和API参考',
          link: '/reference/站点配置'
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      {
        icon: {
          svg: '<svg t="1714560896104" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4243" width="200" height="200"><path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="4244"></path></svg>'
        },
        link: 'https://github.com/vuejs/vitepress'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
