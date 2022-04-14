module.exports = eleventyConfig => {
  eleventyConfig.setBrowserSyncConfig(require('@jgarber/browsersync-config/eleventy'));

  eleventyConfig.addPassthroughCopy('./src/assets');

  eleventyConfig.addPassthroughCopy('./src/apple-touch-icon.png');
  eleventyConfig.addPassthroughCopy('./src/favicon.ico');
  eleventyConfig.addPassthroughCopy('./src/icon-256x256.png');
  eleventyConfig.addPassthroughCopy('./src/icon-384x384.png');
  eleventyConfig.addPassthroughCopy('./src/icon-512x512.png');
  eleventyConfig.addPassthroughCopy('./src/icon.svg');
  eleventyConfig.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
