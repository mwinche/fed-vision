import babel from 'rollup-plugin-babel';

export default {
  entry: 'lib/index.js',
  dest: 'es/index.js',
  external: [
    'react',
    'glamor',
    'prop-types',
    'react-redux',
    '@mwinche/state-channels',
    '@mwinche/typeable-pick-list',
    '@mwinche/chat'
  ],
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
      plugins: ["external-helpers", "transform-class-properties"],
    })
  ]
};
