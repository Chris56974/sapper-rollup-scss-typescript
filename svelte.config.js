import sveltePreprocess from 'svelte-preprocess';
// const sveltePreprocess = require('svelte-preprocess');

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require('autoprefixer')]
  },
  scss: true,
  typescript: true
});

export default preprocess;
// module.exports = preprocess;
