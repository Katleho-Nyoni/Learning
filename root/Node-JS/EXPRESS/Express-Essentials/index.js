import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.get('/', (req,res) => {
    res.send("This is a GET method route");
})

app.post('/api/establish', (req,res) => {
    res.send("This is a POST method route");
})

app.put('/api/edit', (req,res) => {
    res.send("This is a PUT method route");
})

app.delete('/api/delete', (req,res) => {
    res.send("This is a DELETE method route");
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(data);
});
