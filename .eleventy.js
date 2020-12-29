module.exports = eleventy => {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.addPassthroughCopy('./src/assets');

  eleventy.addPassthroughCopy('./src/apple-touch-icon.png');
  eleventy.addPassthroughCopy('./src/favicon.ico');
  eleventy.addPassthroughCopy('./src/icon-256x256.png');
  eleventy.addPassthroughCopy('./src/icon-384x384.png');
  eleventy.addPassthroughCopy('./src/icon-512x512.png');
  eleventy.addPassthroughCopy('./src/manifest.webmanifest');
  eleventy.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
