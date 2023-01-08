const jwt = require('jsonwebtoken');
const db = require('../../routes/db-config');

const createNote = (req, res) => {
  if (!req.cookies.logUser) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
    return err ? null : id;
  })
  if (user === null) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  
  const {title, note} = req.body

  db.query('INSERT INTO notes values(null, ?, ?, ?, CURDATE(), 1)', [user.id, title, note], (err, result) => {
    if (err) throw err
    return res.json({status: 1, message: 'Nota añadida!'})
  })
}
module.exports = createNote