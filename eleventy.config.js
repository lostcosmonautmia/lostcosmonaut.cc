module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData('app', require('./src/manifest.webmanifest.json'));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy('./src/_{headers,redirects}')
    .addPassthroughCopy('./src/*.{ico,png,svg,txt}')
    .addPassthroughCopy('./src/assets')
    .addPassthroughCopy({
      './src/manifest.webmanifest.json': 'manifest.webmanifest'
    });

  return {
    dir: {
      input: './src'
    }
  };
};
