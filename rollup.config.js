import buble from 'rollup-plugin-buble'
import inject from 'rollup-plugin-inject'

const pkg = require('./package.json')

export default {
  entry: './src/index.js',
  targets: [
    { format: 'cjs', dest: 'dist/index.cjs.js' },
    { format: 'es', dest: 'dist/index.es.js' }
  ],
  plugins: [
    buble({
      include: 'src/**',
      objectAssign: 'simpleAssign'
    }),
    inject({
      include: 'src/**',
      React: 'react',
      simpleAssign: 'simple-assign'
    })
  ],
  external: (id) => id === 'react' ||
    Object.keys(pkg.dependencies).includes(id.split('/')[0])
}
