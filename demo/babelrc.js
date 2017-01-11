const path = require('path')

module.exports = {
  presets: ['next/babel'],
  plugins: [
    'react-require',
    ['module-resolver', {
      alias: {
        bulmare: path.resolve(__dirname, '../src/index.js')
      }
    }]
  ]
}
