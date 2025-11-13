import express from "express";
import data from "./data/MOCK_DATA.json";

const app = express();

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
