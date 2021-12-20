// /packages/button/rollup.config.js
import vue from 'rollup-plugin-vue'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'

import autoprefixer from 'autoprefixer'
// import cssnano from 'cssnano'

module.exports = [
  {
    // 入口
    input: 'index.js',
    // 出口
    output: [
      {
        file: './lib/ins-form.umd.js',
        format: 'umd',
        name: 'insForm',
        //当入口文件有export时，'umd'格式必须指定name
        //这样，在通过<script>标签引入时，才能通过name访问到export的内容。
      },
      {
        file: './lib/ins-form.es.js',
        format: 'es',
      },
      {
        file: './lib/ins-form.cjs.js',
        format: 'cjs',
      },
    ],
    globals: {
      vue: 'Vue',
      'element-plus': 'elementPlus',
    },
    // 插件
    plugins: [
      vue({
        // 把单文件组件中的样式，插入到html中的style标签
        // css: true,
        // 把组件转换成 render 函数
        compileTemplate: true,
      }),
      // 代码压缩
      terser(),
      postcss({
        plugins: [
          autoprefixer(),
          // cssnano()
        ],
        extract: 'css/index.css',
      }),
    ],
    //外部库， 使用'umd'文件时需要先引入这个外部库
    external: ['vue', 'element-plus'],
  },
]
