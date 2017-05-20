import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  dest: 'es/index.js',
  external: [ 'react', 'glamor', 'prop-types' ],
  format: 'es',
  plugins: [
    babel({
      babelrc: false,
      exclude: 'node_modules/**',
      presets: [ "react", "stage-2",
        ["latest", {
          "es2015": { modules: false }
        }]
      ],
      plugins: ["external-helpers"],
    })
  ]
};
