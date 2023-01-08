const jwt = require('jsonwebtoken');
const db = require('../../routes/db-config');

const deleteNote = (req, res) => {
  console.log('llego');
  if (!req.cookies.logUser) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
    return err ? null : id;
  })
  if (user === null) return res.json({status: 0, message: 'Inicie sesión otra vez'})

  const {note_id} = req.body

  console.log(note_id,'paso los if');
  db.query('UPDATE notes SET state = 0 WHERE note_id = ?', [note_id], (err, result) => {
    if (err) throw err
    return res.json({status: 1, message: 'Nota añadida!'})
  })
}

module.exports = deleteNote