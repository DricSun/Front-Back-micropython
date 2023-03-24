const express = require("express");
const cors = require("cors");
const app = express();
const ip   = require('ip')
console.log(ip.address())

const led = ''

app.use(cors());
app.use(express.json());

app.get("/message", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.post("/led" , (req , res) => {
    led = req.body
    res.json({})
})

app.listen(7000, '192.168.159.30' , () => {
  console.log(`Server is running on port 7000.`);
});