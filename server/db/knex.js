const knex = require("knex")

const connectedKnex = knex({
  client: "sqlite3",
  connection: {
    filename: "./database/db.sqlite3"
  }
})

module.exports = connectedKnex