import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.esm.js',
        format: 'esm',
        plugins: [
          terser({
            compress: {
              drop_console: true,
            },
            mangle: true,
          }),
        ],
      },
      {
        file: './dist/index.cjs.js',
        format: 'cjs',
        plugins: [
          terser({
            compress: {
              drop_console: true,
            },
            mangle: true,
          }),
        ],
      },
    ],
    external: ['next', 'next/server'],
    plugins: [typescript({ tsconfig: './tsconfig.json' })],
  },
  {
    input: './src/index.ts',
    output: {
      file: './dist/index.d.ts',
      format: 'esm',
      sourcemap: false,
    },
    plugins: [dts()],
  },
];
