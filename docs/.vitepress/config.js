/*
 * @Author: Wanko
 * @Date: 2024-04-30 14:41:18
 * @LastEditors: Wanko
 * @LastEditTime: 2024-04-30 16:03:48
 * @Description: 
 */
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'VitePress',
  description: 'VitePress | 由 Vite 和 Vue 驱动的静态站点生成器',
  lastUpdated: true,
  themeConfig: {
    siteTitle: 'VitePress',
    logo: '/vitepress-logo-mini.svg',
    search: {
      provider: 'local'
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '指南', link: '/guide/什么是VitePress' },
      { text: '参考', link: '/reference/站点配置' },
      { text: '例子', link: '/markdown-examples' }
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
          collapsed: true,
          items: [
            { text: '什么是VitePress', link: '/guide/什么是VitePress' },
            { text: '快速开始', link: '/guide/快速开始' },
            { text: '路由', link: '/guide/路由' },
            { text: '部署', link: '/guide/部署' }
          ]
        },
        {
          text: '写作',
          collapsed: true,
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
          collapsed: true,
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
          collapsed: true,
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
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
  }
})
