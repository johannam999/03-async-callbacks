'use strict';

const fs = require('fs');

const fileReader = module.exports = {};

fileReader.displaySomeCharacters = (filePath, characters, callback) => {
  console.log(`Display ${filePath}`);

  return fs.readFile(
    filePath,
    (error, result) => {
      if (error) {
        throw error;
      }
      return callback(null, result.toString('utf8', 0, characters));
    },
  );
};
