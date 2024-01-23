# Util
A collection of usefulness.

## Description
This repository contains useful tools for all sorts of things and manners that sometimes just need to be done.

## linux/shell/elevenLogJSON
```shell
  elevenLogJSON error "this is an error message"
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"ERROR", "msg":"this is an error message"}

  export DEBUG=true
  elevenLogJSON debug "this is a debug message that's only displayed if DEBUG is set"
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"DEBUG", "msg":"this is a debug message that's only displayed if DEBUG is se"}
```

## node/util
```js
  elevenLogJSON('error', 'this is an error message');
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"ERROR", "msg":"this is an error message"}

  process.env?.DEBUG=true
  elevenLogJSON('debug', `this is a debug message that's only displayed if DEBUG is set`);
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"DEBUG", "msg":"this is a debug message that's only displayed if DEBUG is se"}
```