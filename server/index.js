const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

app.use(cors())
app.use(express.static(path.join(__dirname, "../client/public")));
app.use(express.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.get("/profile", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/public/profile.html"));
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});