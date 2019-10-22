import sveltePreprocess from 'svelte-preprocess';

const preprocess = sveltePreprocess({
  postcss: {
    plugins: [require('autoprefixer')]
  },
  scss: true
});

export default preprocess;
