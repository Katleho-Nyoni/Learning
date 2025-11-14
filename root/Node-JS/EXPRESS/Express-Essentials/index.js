import express from "express";
import data from "./data/MOCK_DATA.json" with { type: "json" };

const app = express();

const PORT = 3000;

app.get("/class/:id", (req,res) => {
    // res.send("This is a GET method route");
    const studentId = Number(req.params.id);

    const student = data.filter(( student ) => student.id === studentId);

    res.send(student);

    // Route chaining is cool
});

app.post('/api/establish', (req,res) => {
    res.send("This is a POST method route");
})

app.put('/api/edit', (req,res) => {
    res.send("This is a PUT method route");
})
   
app.delete('/api/delete', (req,res) => {
    res.send("This is a DELETE method route");
})

app.use(express.static("public")); //root localhost:3000/file

app.use('/images', express.static('images')); //localhost:3000/images/file

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
//   console.log(data);
});
