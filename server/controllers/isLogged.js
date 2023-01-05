const db = require("../routes/db-config");
const jwt = require('jsonwebtoken')

const isLogged = (req, res) => {
  if (!req.cookies.logUser) return res.json({status: 0, yo: 'linea 5'})
  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => { 
    console.log(err);
    return err ? null : id;
  })
  console.log(user,'parte de user');
  if (user == null) return res.json({status: 0, yo: 'linea 11'})
  db.query('SELECT user FROM users WHERE iduser = ?', [user.id], (err, result) => {
    if (err) throw err
    return res.json({status: 1, user: result[0].user})
  })
}
module.exports = isLogged