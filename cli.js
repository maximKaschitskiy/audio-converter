const readline = require('readline');

async function getInputDirectories() {
  console.info('Application started.');
  console.info('Folders can be in absolute (C:/Documents/...) or relative (folder/subfolder) format');
  console.info('Bitrate must be CBR and only number (32, 96, 128, 192, 256, 320)');

    return new Promise((resolve) => {
      const dialog = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
      });
      dialog.question('Enter comma separated input folders: ', (inputDirs) => {
        dialog.question('Enter output folder, only one: ', (outputDir) => {
          dialog.question('Enter bitrate: ', (bitrate) => {
            dialog.close();
            const inputDirectories = inputDirs.split(',').map((dir) => dir.trim());
            resolve({ inputDirs: inputDirectories, outputDir, bitrate });
          });
        });
      });
    });
  }
  
  module.exports = {getInputDirectories};