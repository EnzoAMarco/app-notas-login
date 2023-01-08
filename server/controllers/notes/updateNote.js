const jwt = require('jsonwebtoken');
const db = require('../../routes/db-config');

const updateNote = (req, res) => {
  if (!req.cookies.logUser) return res.json({status: 0, message: 'Inicie sesión otra vez'})

  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
    return err ? null : id;
  })
  console.log(user);
  if (user === null) return res.json({status: 0, message: 'Inicie sesión otra vez'})

  const {title, note, note_id} = req.body

  db.query('UPDATE notes SET title = ?, note = ?, date = CURDATE() WHERE note_id = ? AND user_id = ?', [title, note, note_id, id], (err, result) => {
    if (err) throw err
    return res.json({status: 1, message: 'Nota actualizada'})
  })
}
module.exports = updateNote