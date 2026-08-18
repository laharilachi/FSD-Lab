const express = require("express");

const app = express();

const PORT = 2008;
// CUSTOM MIDDLEWARE + REQUEST LOGGING
app.use((req, res, next) => {
    console.log(
        `${req.method} ${req.url} - ${new Date().toLocaleTimeString()}`
    );

    next();
});

// Read JSON data
app.use(express.json());

// Serve test.html
app.get("/test", (req, res) => {
    res.sendFile(__dirname + "/test.html");
});

// GET
app.get("/users", (req, res) => {
    res.json({
        message: "GET: Fetching users"
    });
});

// POST - Receive JSON
app.post("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "POST: User received successfully",
        user: user
    });
});

// PUT - Receive JSON
app.put("/users", (req, res) => {
    const user = req.body;

    res.json({
        message: "PUT: User updated successfully",
        user: user
    });
});

// DELETE
app.delete("/users/:id", (req, res) => {
    const id = req.params.id;

    res.json({
        message: `User with ID ${id} deleted successfully`
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});