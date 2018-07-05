const tailwindcss = require('tailwindcss');

module.exports = {
  plugins: [
    require('postcss-import')(),
    tailwindcss('./tailwind.config.js'),
    require('postcss-cssnext')(),
    require('postcss-extend')(),
    require('postcss-mixins')(),
    require('css-mqpacker')(),
  ]
}
