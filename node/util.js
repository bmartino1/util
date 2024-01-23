const { inspect } = require('node:util');

const elevenLogJSON = (type, message) => {
  if(process.env?.DEBUG || (!process.env?.DEBUG && !/debug/i.test(type))){
    console.log(JSON.stringify({
      time:new Date().toISOString(),
      type:type.toUpperCase(),
      msg:inspect(message, {
        showHidden:false,
        depth:7,
        maxStringLength:64,
        compact:true,
        sorted:true
      })
    }));
  }
}

module.exports = {
  elevenLogJSON
};