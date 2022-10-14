const knex = require("./knex")

const addUser = async ({name,password}) => {
  let user = await knex("users").where("name",name).select("*")
  console.log("USER",user)
  if (!user.length) {
    if (password.length<5) {
      return "ERROR: PASSWORD MUST BE 6 OR MORE SYMBOLS"
    }
    if (name.length<2) {
      return "ERROR: NAME MUST BE 3 OR MORE SYMBOLS"
    }
    let res = await knex('users').insert({name, password, role: "user", basket: {}})
    console.log("RES",res)
    return "OK"
  } else {
    return "USER EXISTS"
  }
}

const signIn = async ({name, password}) => {
  if (!password) password=""
 
  let user = await knex("users").where("name",name).select("*")
  if (user.length) {
 if (password == user[0].password) {
  return "OK"
 } else {
  return "WRONG PASSWORD"
 }
} else {
  return "USER NOT FOUND"
}
}

module.exports = {addUser,signIn}