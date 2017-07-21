import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  external: [ 'redux' ],
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
