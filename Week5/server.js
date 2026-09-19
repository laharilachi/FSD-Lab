const express = require("express");

const app = express();

const PORT = 2007;
// 2) BASIC ROUTES
// Home
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server");
});

// About
app.get("/about", (req, res) => {
    res.send("This is the About Page");
});
// Contact
app.get("/contact", (req, res) => {
    res.send("This is the Contact Page");
});
//route para
app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    res.send(`Hello ${name}`);
});
//query para
app.get("/search", (req, res) => {
    const name = req.query.name;
    const course = req.query.course;

    res.send(`Name: ${name}, Course: ${course}`);
});
//dynamic url exmp
app.get("/product/:id", (req, res) => {
    const id = req.params.id;

    res.send(`Product ID: ${id}`);
});
// for starting server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});