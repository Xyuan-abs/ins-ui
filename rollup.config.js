import fs from 'fs'
import path from 'path'

import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser' // 压缩
import json from '@rollup/plugin-json' // 读取json文件内容
import { nodeResolve } from '@rollup/plugin-node-resolve' // import bar from './bar/index.js' => import bar from './bar'

import postcss from 'rollup-plugin-postcss' // css
const autoprefixer = require('autoprefixer')

const isDev = process.env.NODE_ENV !== 'production'
// packages 文件夹路径
const root = path.resolve(__dirname, 'packages')

// 公共插件配置
const getPlugins = () => {
  return [
    vue(),
    nodeResolve({
      mainField: ['jsnext:main', 'browser', 'module', 'main'],
      browser: true,
    }),
    json(),
    postcss({
      plugins: [autoprefixer],
      // 把 css 插入到 style 中
      // inject: true,
      // 把 css 放到和js同一目录
      extract: 'style.css',
      // Minimize CSS, boolean or options for cssnano.
      minimize: !isDev,
      // Enable sourceMap.
      sourceMap: isDev,
      // This plugin will process files ending with these extensions and the extensions supported by custom loaders.
      extensions: ['.sass', '.less', '.scss', '.css'],
    }),
    // 如果不是开发环境，开启压缩
    !isDev && terser({ toplevel: true }),
  ]
}

module.exports = fs
  .readdirSync(root)
  // 过滤，只保留文件夹
  .filter((item) => fs.statSync(path.resolve(root, item)).isDirectory())
  // 为每一个文件夹创建对应的配置
  .map((item) => {
    const pkg = require(path.resolve(root, item, 'package.json'))
    return {
      input: path.resolve(root, item, 'src/index.js'),
      output: [
        {
          name: 'index',
          file: path.resolve(root, item, pkg.main),
          format: 'umd',
          sourcemap: isDev,
          globals: {
            vue: 'vue',
            'element-plus': 'element-plus',
          },
        },
        {
          name: 'index.module',
          file: path.join(root, item, pkg.module),
          format: 'es',
          sourcemap: isDev,
          globals: {
            vue: 'vue',
            'element-plus': 'element-plus',
          },
        },
      ],
      onwarn: function (warning) {
        if (warning.code === 'THIS_IS_UNDEFINED' || warning.code === 'CIRCULAR_DEPENDENCY') {
          return
        }
        console.error(`(!) ${warning.message}`)
      },
      plugins: getPlugins(),
      external: Object.keys(require(path.join(root, item, 'package.json'))?.peerDependencies || {}),
    }
  })
