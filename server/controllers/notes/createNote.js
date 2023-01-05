const jwt = require('jsonwebtoken');
const db = require('../../routes/db-config');

const createNote = (req, res) => {
  if (!req.cookies.logUser) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
    return err ? null : id;
  })
  if (user === null) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  
  const {title, note} = req.body
  const time = new Date(Date.now())
  const date = time.getFullYear()+'-'+time.getMonth() + 1 + '-' + time.getDate() + ' ' + time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds();

  db.query('INSERT INTO notes SET ?', [title, note, date], (err, result) => {
    if (err) throw err
    return res.json({status: 1, message: 'Nota añadida!'})
  })
}
module.exports = createNote