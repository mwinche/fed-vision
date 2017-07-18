console.log('hi');

setTimeout(
  () => {
    import('./temp.js').then(string => console.log(string));
  },
  5000
);
