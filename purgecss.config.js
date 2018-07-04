module.exports = {
  content: ['./src/**/*.js'],
  css: ['./src/assets/styles/compiled.css'],
  whitelist: ['body', 'html'],
  extractors: [
    {
      extractor: class {
        static extract(content) {
          return content.match(/[A-z0-9-:\/]+/g)
        }
      },
      extensions: ['html', 'js']
    }
  ]
}
