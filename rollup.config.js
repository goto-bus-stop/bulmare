import babel from 'rollup-plugin-babel'

const pkg = require('./package.json')

export default {
  input: './src/index.js',
  output: [
    { format: 'cjs', file: 'dist/index.cjs.js' },
    { format: 'es', file: 'dist/index.es.js' }
  ],
  plugins: [
    babel({
      include: 'src/**',
      plugins: ['external-helpers']
    })
  ],
  external: (id) => id === 'react' ||
    Object.keys(pkg.dependencies).includes(id.split('/')[0])
}
