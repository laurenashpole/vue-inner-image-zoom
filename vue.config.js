const path = require('path');

module.exports = {
  pages: {
    index: {
      entry: 'demo/src/index.js'
    }
  },
  devServer: {
    contentBase: path.join(__dirname, 'demo')
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('vue', '@vue/compat');

    config.module
      .rule('vue')
      .use('vue-loader')
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2
            }
          }
        }
      });
  }
};
