import typescript from '@rollup/plugin-typescript';

export default {
    input: 'index.ts',
    output: {
        file: 'lib/index.mjs',
    },
    plugins: [
        typescript({ tsconfig: './tsconfig.json' }),
    ],
};

