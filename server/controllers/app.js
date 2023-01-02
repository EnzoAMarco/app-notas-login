const express = require('express')
const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.post('/createNote', createNote)
router.get('/logout', logout)

module.exports = router
