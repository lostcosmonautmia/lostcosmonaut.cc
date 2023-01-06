module.exports = eleventyConfig => {
  eleventyConfig
    .addPassthroughCopy('./src/assets')
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
