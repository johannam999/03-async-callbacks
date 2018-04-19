'use strict';

const fileReader = require('./lib/reader');

const beethovenPath = `${__dirname}/data/beethoven.txt`;
const applePiePath = `${__dirname}/data/apple-pie.txt`;
const scottishPath = `${__dirname}/data/scottish.txt`;


const printCharacters = (characters) => {
  console.log(characters);
  console.log('--------------------------------------------');
  console.log('--------------------------------------------');
};
const CHARACTERS = 150;

const pathArray = [scottishPath, beethovenPath, applePiePath];


const readArrayAsync = (fileArray, indexNo, callback) => {
  if (indexNo >= fileArray.length) {
    return callback();
  }
  const currentFilePath = fileArray[indexNo];
  try {
    return fileReader.displaySomeCharacters(currentFilePath, CHARACTERS, (error, file) => {
      printCharacters(file);
      readArrayAsync(fileArray, indexNo + 1, callback);
    });
  } catch (error) {
    callback(error);
  }
  return undefined;
};
  
readArrayAsync(pathArray, 0, () => console.log( 'All the files are displayed'));
