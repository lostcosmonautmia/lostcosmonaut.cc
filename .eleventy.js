module.exports = eleventyConfig => {
  eleventyConfig
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}')
    .addPassthroughCopy('./src/assets');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
