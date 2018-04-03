import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
  output: [
    { format: 'cjs', file: pkg.main },
    { format: 'es', file: pkg.module }
  ],
  plugins: [
    babel({ include: 'src/**' })
  ],
  external: (id) => id === 'react' ||
    Object.keys(pkg.dependencies).includes(id.split('/')[0])
}
