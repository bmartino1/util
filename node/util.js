const logJSON = (type, message) => {
  console.log({
    time:new Date().toISOString(),
    type:type.toUpperCase(),
    message:message
  });
}

module.exports = {logJSON};