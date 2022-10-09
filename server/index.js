const express = require("express")
const app = express()
const db = require("./db/products")

app.get("/",(req,res)=>{
  res.status(200).json({api: "green-store",success: true})
})

app.post("/products", async (req,res)=>{
  const results = await db.getAllProducts()
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  res.status(200).json({data: results})
})

const PORT = process.env.PORT || 1337;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))