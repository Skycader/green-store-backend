const knex = require("./knex")

const getProducts = () => {
  return knex("products").select("*")
}

const getProductByName = ({name}) => {
  return knex("products").where("name","like",`%${name}%`).select("*")
}

const addProduct = async ({name,count,description,image,price}) => {
  await knex('products').insert({name, count, description, image, price})
}

const editProduct = async ({id,name,count,description,image,price,password}) => {
  console.log(id,name)
  let users = await knex("users").where("name","admin").select("password")
  console.log(users,password)
  if (users[0].password !== password) return "FAIL: YOU ARE NOT ADMIN"
  return await knex("products").where("id",id).update({
    name,count,description,image,price
  })
}

module.exports = {
  getProducts,
  getProductByName,
  addProduct,
  editProduct
}