const isTesting = process.env.NODE_ENV === 'testing'

module.exports = {
  presets: [
    ['@babel/env', {
      modules: isTesting ? 'commonjs' : false,
      loose: true
    }],
    '@babel/react'
  ],
  plugins: [
    '@babel/proposal-object-rest-spread'
  ]
}
