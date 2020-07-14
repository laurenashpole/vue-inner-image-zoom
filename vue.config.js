module.exports = {
  pages: {
    index: {
      entry: 'public/src/index.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'vue-inner-image-zoom Demo',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}