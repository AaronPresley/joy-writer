import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import autoPreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy'

const production = !process.env.ROLLUP_WATCH;

const baseConfig = {
	plugins: [
		svelte({
			dev: !production,
			preprocess: autoPreprocess(),
    }),
    
		resolve({
			browser: true,
			dedupe: ['svelte']
    }),
    
    commonjs(),
    
		typescript(),
	],
	watch: {
		clearScreen: false
	}
};

export default [
  /**
   * Our website compilation config
   */
  {
    ...baseConfig,
    input: 'src/website/index.ts',
    output: {
      file: 'out/website/index.js',
      sourcemap: true,
    },
    plugins: [
      ...baseConfig.plugins,
      copy({
        targets: [
          { src: 'src/website/index.html', dest: 'out/website' },
        ]
      })
    ],
  },

  /**
   * Our electron compilation config
   */
  {
    ...baseConfig,
    input: 'src/electron/index.ts',
    output: {
      file: 'out/electron/index.js'
    },
    plugins: [
      ...baseConfig.plugins,
      copy({
        targets: [
          { src: 'src/website/index.html', dest: 'out/website' },
        ]
      })
    ],
  }
]
