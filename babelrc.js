const isTesting = process.env.NODE_ENV === 'testing'

module.exports = {
  presets: [
    ['latest', {
      es2015: { modules: isTesting ? 'commonjs' : false, loose: true }
    }],
    'react'
  ],
  plugins: [
    'transform-object-rest-spread'
  ]
}
