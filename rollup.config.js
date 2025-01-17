import typescript from '@rollup/plugin-typescript';
import dts from 'rollup-plugin-dts';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: './src/index.ts',
    output: [
      {
        file: './dist/index.mjs',
        format: 'esm',
        plugins: [
          terser({
            mangle: true,
          }),
        ],
      },
      {
        file: './dist/index.cjs',
        format: 'cjs',
        plugins: [
          terser({
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
