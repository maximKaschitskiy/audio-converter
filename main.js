require("dotenv").config();
const { getInputDirectories } = require("./cli");
const { convert } = require("./converter");
const { objectToString, spinner, deepSearch } = require("./utils");
const path = require("path");

const { LAME_PATH } = process.env;
process.platform === "win32" && LAME_PATH
  ? (process.env.PATH += `;${LAME_PATH}`)
  : null;

const main = async () => {
  const { inputDirs, outputDir, bitrate } = await getInputDirectories();
  const files = deepSearch(inputDirs, '.wav');
  startConversion(files, outputDir, bitrate);
}

const startConversion = (inputFilePaths, outputDirectory, bitrate) => {
  const statuses = {};

  const statusCallback = (status) => {
    Object.assign(statuses, status);
    const keys = Object.keys(statuses);
    const values = Object.values(statuses);
    process.stdout.write("\r" + objectToString(status));
    if (values.every((item) => item === "done")) {
      clearInterval(spinnerInterval);
    }
  };

  const spinnerInterval = spinner();

  inputFilePaths.forEach((inputFilePath, index) => {
    const { name } = path.parse(inputFilePath);
    const outputFilePath = `${outputDirectory}/${index + 1} ${name}.mp3`;
    convert(
      inputFilePath,
      outputFilePath,
      bitrate,
      statusCallback,
      index
    );
  });
}

main();
