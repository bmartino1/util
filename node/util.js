const elevenLogJSON = (type, message) => {
  if((/debug/i.test(type) && process.env?.DEBUG) || true){
    console.log(JSON.stringify({
      time:new Date().toISOString(),
      type:type.toUpperCase(),
      msg:message
    }));
  }
}

module.exports = {
  elevenLogJSON
};