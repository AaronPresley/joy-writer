import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import sveltePreprocess from 'svelte-preprocess';
import typescript from '@rollup/plugin-typescript';

import copy from 'rollup-plugin-copy'


const production = !process.env.ROLLUP_WATCH;

const baseConfig = {
	plugins: [
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: css => {
				css.write('out/website/bundle.css');
			},
			preprocess: sveltePreprocess(),
		}),

		// If you have external dependencies installed from
		// npm, you'll most likely need these plugins. In
		// some cases you'll need additional configuration -
		// consult the documentation for details:
		// https://github.com/rollup/plugins/tree/master/packages/commonjs
		resolve({
			browser: true,
			dedupe: ['svelte']
		}),
		commonjs(),
		typescript({ sourceMap: !production }),
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
      file: 'out/website/index.js'
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
