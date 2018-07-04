module.exports = {
  content: ['./src/**/*.js'],
  css: ['./src/App.css'],
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
