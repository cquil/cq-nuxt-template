import { Vue2 } from "nuxt/dist/app/compat/vue-demi";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },


  app: {
    head: {
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/favicon.ico'
        },
      ],
      meta: [
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'サイトタイトル' },
        { property: 'og:url', content: 'サイトurl' },
        { property: 'og:site_name', content: 'サイトタイトル' },
        { name: 'og:description	', content: 'サイト概要'},
        { name: 'description', content: 'サイト概要'},
        { name: 'keywords', content: 'ワード、ワード' },
        { property: 'og:image', content: 'https://domain.jp/ogp.png', },

        // Twitterカードのメタ情報を追加
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:site', content: '@' },
        { name: 'twitter:title', content: '' },
        { name: 'twitter:description', content: '' },
        { name: 'twitter:image', content: 'https://domain.jp/ogp.png' },
      ],
    },
  },

  // コンポーネントのPATHを通す
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],

  css: [
    "/assets/css/style.scss",
  ],

  
  vite: {
    server: {
      hmr: {
        overlay: false,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @import "@/assets/css/global/_setting.scss";
            @import "@/assets/css/global/_mixin.scss";
            @import "@/assets/css/global/_normalize.scss";
          `
        }
      },
    },
  },
})
