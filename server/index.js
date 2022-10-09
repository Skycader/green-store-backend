const express = require("express")
const app = express()
const db = require("./db/products")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});

app.get("/",(req,res)=>{
  res.status(200).json({api: "green-store",success: true})
})

app.post("/products", async (req,res)=>{
  const results = await db.getAllProducts()
  res.status(200).json({data: results})
})

const PORT = process.env.PORT || 1337;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))