import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

export default {
  entry: './src/index.js',
  targets: [
    { format: 'cjs', dest: 'dist/index.cjs.js' },
    { format: 'es', dest: 'dist/index.es.js' }
  ],
  plugins: [
    babel({ include: 'src/**' })
  ],
  external: (id) => id === 'react' ||
    Object.keys(pkg.dependencies).includes(id.split('/')[0])
}
