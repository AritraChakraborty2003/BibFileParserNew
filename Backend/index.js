import express, { query } from "express";
import dotenv from "dotenv";
import { verifyUser } from "./Middlewares/verifyUser.js";
import cors from "cors";
import { toJSON } from "bibtex-parser-js";
import { readFile } from "fs/promises";

dotenv.config();

const PORT = process.env.PORT || 3000;
const filePath = "./data3.bib";

//app configuration
const app = express();

//Cors middleware setup
app.use(cors());

//API endpoints
app.get("/:id", verifyUser, async (req, res) => {
  try {
    const bibData = await readFile(filePath, "utf-8");

    const parsedData = toJSON(bibData);

    if (Object.entries(req.query).length === 2) {
      //   console.log(parsedData[0].entryTags.ABSTRACT.includes("code mixing"));

      const data1 = req.query.data1;

      // console.log(parsedData[0]);
      const filteredData = [];
      for (let i = 0; i < parsedData.length; i++) {
        try {
          if (
            parsedData[i].entryTags.ABSTRACT.includes(data1) ||
            parsedData[i].entryTags.TITLE.includes(data1)
          ) {
            filteredData.push(parsedData[i]);
          }
        } catch (e) {}
      }
      res.json(filteredData);
    }
    if (Object.entries(req.query).length === 3) {
      const data1 = req.query.data1;
      const data2 = req.query.data2;

      // console.log(parsedData[0]);
      const filteredData = [];
      for (let i = 0; i < parsedData.length; i++) {
        try {
          if (
            parsedData[i].entryTags.ABSTRACT.includes(data1) ||
            parsedData[i].entryTags.TITLE.includes(data1) ||
            parsedData[i].entryTags.ABSTRACT.includes(data2) ||
            parsedData[i].entryTags.TITLE.includes(data2)
          ) {
            filteredData.push(parsedData[i]);
          }
        } catch (e) {}
      }

      res.json(filteredData);
    }
    if (Object.entries(req.query).length === 4) {
      const data1 = req.query.data1;
      const data2 = req.query.data2;
      const data3 = req.query.data3;

      const filteredData = [];
      for (let i = 0; i < parsedData.length; i++) {
        try {
          if (
            parsedData[i].entryTags.ABSTRACT.includes(data1) ||
            parsedData[i].entryTags.TITLE.includes(data1) ||
            parsedData[i].entryTags.ABSTRACT.includes(data2) ||
            parsedData[i].entryTags.TITLE.includes(data2) ||
            parsedData[i].entryTags.ABSTRACT.includes(data3) ||
            parsedData[i].entryTags.TITLE.includes(data3)
          ) {
            filteredData.push(parsedData[i]);
          }
        } catch (e) {}
      }

      res.json(filteredData);
    }
    if (Object.entries(req.query).length === 5) {
      const data1 = req.query.data1;
      const data2 = req.query.data2;
      const data3 = req.query.data3;
      const data4 = req.query.data4;

      const filteredData = [];
      for (let i = 0; i < parsedData.length; i++) {
        try {
          if (
            parsedData[i].entryTags.ABSTRACT.includes(data1) ||
            parsedData[i].entryTags.TITLE.includes(data1) ||
            parsedData[i].entryTags.ABSTRACT.includes(data2) ||
            parsedData[i].entryTags.TITLE.includes(data2) ||
            parsedData[i].entryTags.ABSTRACT.includes(data3) ||
            parsedData[i].entryTags.TITLE.includes(data3) ||
            parsedData[i].entryTags.ABSTRACT.includes(data4) ||
            parsedData[i].entryTags.TITLE.includes(data4)
          ) {
            filteredData.push(parsedData[i]);
          }
        } catch (e) {}
      }

      res.json(filteredData);
    } else {
      res.json(parsedData);
    }
  } catch (error) {
    console.error("Error parsing BibTeX file:", error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
