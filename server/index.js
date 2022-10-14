const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const cors = require("cors");
const middleware = require("./middleware/middleware")

app.use(cors());
app.use(bodyParser.json({limit: '50mb'}));

app.get("/", (req, res) => {
  res.status(200).json({ api: "green-store", online: true });
});

app.post("/api", async (req, res) => {
  const results = await middleware(req.body.method,req.body.data)
  
  res.status(200).json({ result: results});
});


const PORT = process.env.PORT || 1337;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
