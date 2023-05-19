const Lame = require("node-lame").Lame;

const convert = (inputFilePath, outputFilePath, bitrate, statusCallback, index) => {

    return new Promise((resolve, reject) => {

      const encoder = new Lame({
        bitrate: bitrate,
        output: outputFilePath
      }).setFile(inputFilePath)

      statusCallback({[`${index + 1} : ${inputFilePath}`]: `in progress`});

      encoder
        .encode()
        .then(() => {
          statusCallback({[`${index + 1} : ${inputFilePath}`]: 'done'});
          resolve();
        })
        .catch((error) => {
          console.log(error);
          reject(error);
        })
        ;
      });
  }

module.exports = {convert};