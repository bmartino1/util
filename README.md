# Util
A collection of usefulness.

## Description
This repository contains useful tools for all sorts of things and manners that sometimes just need to be done.

## linux/shell/log-json
```shell
  elevenLogJSON error "this is an error message"
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"ERROR", "msg":"this is an error message"}
```

## node/util
```js
  elevenLogJSON('error', 'this is an error message');
  $ {"time":"2024-01-04T08:12:39.000Z", "type":"ERROR", "msg":"this is an error message"}
```