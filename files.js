const fs = require('fs');
const path = require('path');

const getWavFiles = (inputFolders) => {
    let results = [];
  
    for (const inputFolder of inputFolders) {
      const files = fs.readdirSync(inputFolder);
  
      for (const file of files) {
        const filePath = path.join(inputFolder, file);
        const stat = fs.statSync(filePath);
  
        if (stat.isDirectory()) {
          results = results.concat(getWavFiles([filePath]));
        } else if (file.endsWith('.wav')) {
          results.push(filePath);
        }
      }
    }
    return results;
  }

module.exports = {getWavFiles};