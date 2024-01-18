const elevenLogJSON = (type, message) => {
  console.log(JSON.stringify({
    time:new Date().toISOString(),
    type:type.toUpperCase(),
    msg:message
  }));
}

module.exports = {
  elevenLogJSON
};