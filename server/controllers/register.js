const bcrypt = require('bcryptjs')
const db = require('../routes/db-config')

const register = async (req, res) => {
  const {user, pass: rawPass} = req.body
  
  db.query('SELECT user FROM users WHERE user = ?', [user], async (stop, checkuser) => {
    if (stop) throw stop
    if (checkuser[0]) return res.json({ status: 0, message: 'Ya existe un usuario con el mismo nombre'})
    const pass = await bcrypt.hash(rawPass, 10)

    db.query('INSERT INTO users VALUE (null, ?, ?)', [user, pass], (err, result) => {
      if (err) throw err
      return res.json({status: 1, message: 'Usuario registrado con éxito'})
    })
  })
}

module.exports = register