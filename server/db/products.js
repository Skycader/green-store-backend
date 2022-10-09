const knex = require("./knex")

const getAllProducts = () => {
  return knex("products").select("*")
}

module.exports = {
  getAllProducts
}