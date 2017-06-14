import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  dest: 'es/index.js',
  external: [ 'redux' ],
  format: 'es',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ "stage-2",
        ["latest", {
          "es2015": { modules: false }
        }]
      ],
      plugins: ["external-helpers"],
    })
  ]
};
