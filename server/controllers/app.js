const express = require('express')
const router = express.Router()

const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const isLogged = require('./isLogged')
const createNote = require('./notes/createNote')
const updateNote = require('./notes/updateNote')
const deleteNote = require('./notes/deleteNote')
const getNotes = require('./notes/getNotes')


router.post('/register', register)
router.post('/login', login)
router.post('/createNote', createNote)
router.post('/updateNote', updateNote)
router.post('/deleteNote', deleteNote)

router.get('/logout', logout)
router.get('/isLogged', isLogged)
router.get('/getNotes', getNotes)

module.exports = router
