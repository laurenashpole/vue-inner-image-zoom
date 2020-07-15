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
}