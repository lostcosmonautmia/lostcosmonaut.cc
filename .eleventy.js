module.exports = eleventy => {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.addPassthroughCopy('./src/assets');
  eleventy.addPassthroughCopy('./src/manifest.webmanifest');
  eleventy.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      layouts: '_layouts',
      output: './public'
    }
  };
};
