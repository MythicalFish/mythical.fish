const _ = require('lodash')
const path = require('path')

exports.createPages = ({ boundActionCreators }) => {
  const { createPage } = boundActionCreators
  createPage({
    path: 'pdf',
    component: path.resolve('src/pages/index.js')
  })
}
