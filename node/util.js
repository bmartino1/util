const elevenLogJSON = (type, message) => {
  if(process.env?.DEBUG || (!process.env?.DEBUG && !/debug/i.test(type))){
    switch(true){
      case /DEBUG|DBG|DEB/i.test(type): type = 'DBG'; break;
      case /INFO|INF/i.test(type): type = 'INF'; break;
      case /WARNING|WARN|WRN/i.test(type): type = 'WRN'; break;
      case /ERROR|ERR/i.test(type): type = 'ERR'; break;
      default: type = 'INF';
    }
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