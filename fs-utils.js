import fs from "fs";

//create the Directory and write file inside the directory  

const createFile =() => {
 console.log("Creating file")
    try {
      if (!fs.existsSync("files")) {
        fs.mkdirSync("files");
      }

      // converted date-time to file name format

      let date = new Date().toString();
      let textDate = date.toString();
      let txt = textDate.split(":").join("-");

      fs.writeFileSync(`./files/${txt}.txt`, `TimeStamp : ${Date.now()}`);
    } catch (e) {
       console.log(`Error writing file: ${e.massage}`);
    }
   
};

// readdir-for rading the files in a folder

const readFolder = (folderName) => {
    try {
       const files =fs.readdirSync(folderName);
       return files;
    } catch (e) {
       console.log(`Error writing file: ${e.massage}`);
    }
   
};

export { createFile, readFolder };