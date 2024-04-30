'use strict';

const fs = require('fs');

try {
  const buf = fs.readFileSync('./input.txt');
  buf = fs.readFileSync('./input.txt');
  console.log(buf.toString());
}
catch (err) {
  console.log(err);
}

