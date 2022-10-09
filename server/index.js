const express = require("express")
const app = express()
const db = require("./db/products")

app.get("/",(req,res)=>{
  res.status(200).json({api: "green-store",success: true})
})

app.post("/products", async (req,res)=>{
  const results = await db.getAllProducts()
  res.status(200).json({data: results})
})

const PORT = process.env.PORT || 1337;
app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))