const fs = require('fs');
const path = require('path');

const spinner = () => {
  const spinnerChars = ["|", "/", "-", "\\"];
  let currentCharIndex = 0;
  return setInterval(() => {
    process.stdout.write(
      "\r" + spinnerChars[currentCharIndex] + " Processing... "
    );
    currentCharIndex = (currentCharIndex + 1) % spinnerChars.length;
  }, 100);
}

const objectToString = (obj) => {
  let result = "";
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result += `${key}: ${obj[key]}\n`;
    }
  }
  return result;
}

const deepSearch = (folders, ext) => {
    let results = [];
  
    for (const folder of folders) {
      const files = fs.readdirSync(folder);
  
      for (const file of files) {
        const filePath = path.join(folder, file);
        const stat = fs.statSync(filePath);
  
        if (stat.isDirectory()) {
          results = results.concat(deepSearch([filePath], ext));
        } else if (file.endsWith(ext)) {
          results.push(filePath);
        }
      }
    }
    return results;
  }

module.exports = {spinner, objectToString, deepSearch};