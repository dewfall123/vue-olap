module.exports = {
  plugins: ['vuepress-plugin-demo-code', 'vuepress-plugin-typescript'],
  title: 'vue-olap',
  description: '',
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-include'), {
        root: './docs/',
        includeRe: /<\[include\]\((.+)\)/i,
      });
    },
  },

  configureWebpack: {
    resolve: {
      alias: {
        'vue-olap': '../src',
      },
    },
  },
};
