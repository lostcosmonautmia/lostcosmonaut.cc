module.exports = function(eleventyConfig) {
  // Global Data
  eleventyConfig.addGlobalData("app", require("./src/manifest.webmanifest.json"));

  // Passthrough File Copy
  eleventyConfig
    .addPassthroughCopy("./src/_headers")
    .addPassthroughCopy("./src/*.{ico,png,svg,txt}")
    .addPassthroughCopy("./src/assets")
    .addPassthroughCopy({
      "./src/manifest.webmanifest.json": "manifest.webmanifest",
    });

  return {
    dir: {
      input: "./src",
    },
  };
};
