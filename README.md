
# Wav-to-Mp3 Converter CLI Application

## Description

This is a test task for a job application. The CLI application is designed to convert WAV audio files to MP3 format using the LAME software and the 'node-lame' library.

## Installation

Clone and type

`npm i`

## Usage

`npm run start` 

and follow the prompts to provide the required input data.

## Input Data

When the application is running, it will prompt you to enter the following input data:

-   **Input Folders**: Provide a comma-separated list of input folders where the WAV files are located. You can specify the folders in absolute format (e.g., `C:/Documents/...`) or relative format (e.g., `folder/subfolder`).
    
-   **Output Folder**: Enter the path to the output folder where the converted MP3 files will be saved. Specify the folder in absolute format (e.g., `C:/Documents/...`) or relative format (e.g., `folder/subfolder`).
    
-   **Bitrate**: Specify the desired constant bit rate (CBR) for the MP3 files. The available options are: 32, 96, 128, 192, 256, and 320.
    

After providing the required input, the application will scan all the subfolders within the specified input folders for existing WAV files and convert them to MP3 format using the LAME software and 'node-lame' library.

## Windows Environment Variable

If the application is run on a Windows operating system, it will attempt to read the LAME_PATH environment variable from the .env file. This environment variable should contain the path to the main Lame For Audacity package. Ensure that the .env file is present and properly configured for the application to locate and use the LAME software.
See description of 'node-lame' for more details:
[enter link description here](https://www.npmjs.com/package/node-lame)
