import express from "express";

import { createFile, readFolder } from "./fs-utils.js";

const app = express();
// for creating a new file in the system
app.get("/create-file", (req, res) => {
        createFile();

        res.send({ msg: "File created successfully!" });
});
// for reading the files from the filesystem
app.get("/read-files", (req, res) => {
      const files = readFolder("files");

        res.send(files);
});

app.listen(5175, () => {
    console.log("APIs running on port 5175");
});