# Project Name
**Author**: Joanna Coll
**Version**: 1.0.0 

## Overview

The purpose of this code is to take text files and display them in the right order including character limit (150). The obstacle with these files is that we need to use callback functions as some files are large and take longer to execute than others. To display the callback functions in the right order instead of execution order we use the array of files that will store the paths in the right order.

## Getting Started

To start you need to create file paths to the .txt files you want to display. We define the array with file paths in the order we want to execut it.
We create a function displaySomeCharacters that prints the text using callback functions and limits of characters and filePath otherwise it returns an error message.
Next we create a readArrayAsync callback function taking parameters: fileArray, indexNo, callback that returns the articles (printCharacters function) otherwise error.

## Architecture
JavaScript, Node.js, Airbnb package, babelrc, other dependencies

## Change Log

04-18-2018 5:00pm - The application is finished. Fully working.
04-18-2018 5:30pm - Finished writing README.md

## Credits and Collaborations
