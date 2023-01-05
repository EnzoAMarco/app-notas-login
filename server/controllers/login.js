const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const db = require('../routes/db-config')

const login = async (req, res) => {
  const {user, pass} = req.body
  
  db.query('SELECT * FROM users WHERE user = ?', [user], async (stop, checkuser) => {
    if (stop) throw stop
    if (!checkuser[0] || !await bcrypt.compare(pass, checkuser[0].password)) return res.json({ status: 0, message: 'Usuario no registrado'})
    const token = jwt.sign({id: checkuser[0].iduser}, process.env.JWT_SECRET,{expiresIn: process.env.JWT_EXPIRES})
    const cookieOption = {
      expiresIn: new Date(Date.now()* process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
      httpOnly: true
    }
    res.cookie('logUser', token, cookieOption)
    return res.json({status: 1, message: 'Inicio de sesión exitoso'})
  })
}

module.exports = login