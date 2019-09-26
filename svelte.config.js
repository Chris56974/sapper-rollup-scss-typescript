import sveltePreprocess from 'svelte-preprocess';
// const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
  scss: true,
  typescript: true
});

export default preprocess;
// module.exports = preprocess;
