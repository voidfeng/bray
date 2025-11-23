import { defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'
import { productMenus, sidebarMenus } from './theme/config'
import { La51Plugin } from 'vitepress-plugin-51la2'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Bray 美国博雷阀门',
  description: '专业工业阀门制造商 - 高品质、可靠、专业的阀门解决方案',
  transformPageData: data => {
    if (data.relativePath !== 'index.md')
      data.titleTemplate = `美国博雷:title - Bray 美国博雷阀门`
  },
  head: [
    // 无法生效
    // [
    //   'meta',
    //   { name: 'viewport',content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }
    // ]
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/apple-touch-icon-57x57.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/apple-touch-icon-60x60.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/apple-touch-icon-72x72.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/apple-touch-icon-76x76.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-touch-icon-114x114.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-touch-icon-120x120.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-touch-icon-144x144.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-touch-icon-152x152.png' },
    ],
    [
      'link',
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon-180x180.png' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-32x32.png', sizes: '32x32' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-194x194.png', sizes: '194x194' },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-96x96.png', sizes: '96x96' },
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon/android-chrome-192x192.png',
        sizes: '192x192',
      },
    ],
    [
      'link',
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-16x16.png', sizes: '16x16' },
    ],
    ['link', { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#5bbad5' }],
    ['link', { rel: 'shortcut icon', href: '/favicon/favicon.ico' }],
  ],
  lang: 'zh-CN',
  vite: {
    plugins: [
      UnoCSS(),
      La51Plugin({
        id: '3Mz88un7J63XQmNO',
        ck: '3Mz88un7J63XQmNO',
        importMode: 'async',
      }),
    ],
    define: {
      K_PREFIX: JSON.stringify('美国博雷'),
      K_SUBFIX: JSON.stringify('Bray 美国博雷阀门'),
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
      src: '/logo.png',
      alt: 'Bray 美国博雷阀门',
    },
    returnToTopLabel: '返回顶部',
    sidebarMenuLabel: '分类目录',
    nav: [
      { text: '首页', link: '/' },
      {
        text: '产品',
        component: 'CustomNavItem',
      },
      {
        text: '产品',
        items: productMenus,
      },
      {
        text: '解决方案',
        items: [
          {
            text: '行业',
            items: [
              { text: '化工和石油', link: '/zh/解决方案/行业/化工和石油' },
              { text: '暖通空调', link: '/zh/解决方案/行业/暖通空调' },
              { text: '食品和饮料', link: '/zh/解决方案/行业/食品和饮料' },
              { text: '数据中心', link: '/zh/解决方案/行业/数据中心' },
              { text: '水和废水处理', link: '/zh/解决方案/行业/水和废水处理' },
              { text: '石油和天然气', link: '/zh/解决方案/行业/石油和天然气' },
            ],
          },
          {
            text: '综合解决方案',
            items: [
              { text: '隔离', link: '/zh/解决方案/综合解决方案/隔离' },
              { text: '自动化', link: '/zh/解决方案/综合解决方案/自动化' },
              { text: '控制', link: '/zh/解决方案/综合解决方案/控制' },
              { text: '以太网/IP', link: '/zh/解决方案/综合解决方案/以太网/IP' },
            ],
          },
        ],
      },
      { text: '联系我们', link: '/contact-us' },
    ],

    sidebar: sidebarMenus,
    outline: {
      label: '本页目录',
    },

    socialLinks: [
      { icon: 'facebook', link: 'https://www.facebook.com/BrayInternational/' },
      { icon: 'x', link: 'https://www.braycn.com/#' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/company/bray-controls/' },
      { icon: 'youtube', link: 'https://www.youtube.com/c/BrayInt' },
    ],

    // 添加本地搜索配置
    search: {
      provider: 'local',
      options: {
        translations: {
        button: {
          buttonText: '搜索...'
        },
        modal: {
          noResultsText: '没有找到：',
          footer: {
            navigateText: '上下切换',
            closeText: '关闭',
            selectText: '回车选择'
          }
        }
       }
      }
    },
  },
})
