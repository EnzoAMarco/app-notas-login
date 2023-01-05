const jwt = require('jsonwebtoken');
const db = require('../../routes/db-config');

const deleteNote = (req, res) => {
  if (!req.cookies.logUser) return res.json({status: 0, message: 'Inicie sesión otra vez'})
  const user = jwt.verify(req.cookies.logUser, process.env.JWT_SECRET, (err, id) => {
    return err ? null : id;
  })

  if (user === null) return res.json({status: 0, message: 'Inicie sesión otra vez'})

  const { id } = req.body
  
  db.query('DELETE FROM notes WHERE note_id = ?', [id], (err, result) => {
    if (err) throw err
    return res.json({status: 1, message: 'Nota eliminada'})
  })
}

module.exports = deleteNote