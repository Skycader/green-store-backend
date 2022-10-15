const knex = require("./knex")

const getBasket = ({name}) => {
  return knex("users").where("name",name).select("basket")
}

const manipulateBasket = async ({id,name,password,quantity}) => {
  if (quantity<0) return "FAIL: NEGATIVE QUANTITY"
  let product = await knex("products").where("id",id).select("*")
  if (!product.length) return "FAIL: NO SUCH PRODUCT"
  product = product[0]
  let users = await knex("users").where("name",name).select("*")
  
  if (!users.length) return "FAIL: YOU ARE NOT SIGNED IN"
  console.log(password, users)
  if (password !== users[0].password.toString()) return "FAIL: WRONG PASSWORD"
  let basket = users[0].basket
  basket = JSON.parse(basket)
  if (basket[id] == undefined) basket[id] = 0
  let diff = quantity-basket[id]
  let OK = (product.count-diff)>=0
  if (OK) {
    basket[id]=quantity
    basket = JSON.stringify(basket)
    await await knex("users").where("name",name).update({
      "basket" : basket
    })
    await await knex("products").where("id",id).update({
      count: product.count-diff
    })
    return JSON.stringify({status: "OK", count: product.count-diff, basket: quantity})
  } else {
    return "FAIL: NOT ENOUGH PRODUCTS"
  }
}

module.exports = {
  getBasket,
  manipulateBasket
}