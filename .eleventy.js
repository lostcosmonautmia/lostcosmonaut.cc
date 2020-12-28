module.exports = function (eleventy) {
  eleventy.setBrowserSyncConfig(require('./bs-config.js'));

  eleventy.addPassthroughCopy('./src/assets');
  eleventy.addPassthroughCopy('./src/robots.txt');

  return {
    dir: {
      input: './src',
      output: './public'
    }
  };
};
