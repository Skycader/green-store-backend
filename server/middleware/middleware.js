const { getProducts, getProductByName, editProduct } = require("../db/products");
const { addUser, signIn } = require("../db/users");
const { getBasket, manipulateBasket } = require("../db/basket");

const middleware = async (method, data) => {
  switch (method) {
    case "getProducts":
      return await getProducts();
    case "getProductByName":
      return await getProductByName(data);
    case "addUser":
      return await addUser(data);
    case "signIn":
      return await signIn(data);
    case "getBasket":
      return await getBasket(data);
    case "manipulateBasket":
      return await manipulateBasket(data);
    case "editProduct":
      return await editProduct(data)
  }
};

module.exports = middleware;
