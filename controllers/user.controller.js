const db = require('../db')
const { uuid } = require('uuidv4')

class UserController {
  async createUser(req, res){
    const {user_name, user_age, user_city} = req.body
    const id = uuid()
    const newUser = await db.query(`INSERT INTO users.user(user_name, user_age, user_city, id) values ($1, $2, $3, $4) RETURNING *`, [`${user_name}`, user_age, `${user_city}`, `${id}`])
    res.json(newUser.rows[0])
  }
  
  async getUsers(req, res){
    const users = await db.query(`SELECT * FROM users.user`)
    res.json(users.rows)
  }

  async getOneUser(req, res){
    const id = req.params.id
    const user = await db.query(`SELECT * FROM users.user where id = '${id}'`)
    res.json(user.rows[0])
  }

  async updateUser(req, res){
    const {id, user_age, user_city, user_name} = req.body
    const user = await db.query(`UPDATE users.user set user_name = $1, user_age = $2, user_city = $3 where id = $4 RETURNING *`, [`${user_name}`, user_age, `${user_city}`, `${id}`])
    res.json(user.rows[0])
  }

  async deleteUser(req, res){
    const id = req.params.id
    const user = await db.query(`DELETE FROM users.user where id = '${id}'`)
    res.json(user.rows[0])
  }
}

module.exports = new UserController()