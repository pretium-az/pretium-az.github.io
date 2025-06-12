export default async function (eleventyConfig) {

  eleventyConfig.setInputDirectory('./src'); 
  eleventyConfig.setIncludesDirectory("_includes");
  eleventyConfig.setLayoutsDirectory("_layouts");
  eleventyConfig.setDataDirectory("_data");
  eleventyConfig.setOutputDirectory("_site");

  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/assets/css/style.css");
  eleventyConfig.addPassthroughCopy("./src/assets/img");

}