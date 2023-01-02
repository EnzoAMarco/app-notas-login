const express = require('express')
const router = express.Router()

const register = require('./register')
const login = require('./login')
const logout = require('./logout')
const createNote = require('./notes/createNote')
const updateNote = require('./notes/updateNote')
const deleteNote = require('./notes/deleteNote')


router.post('/register', register)
router.post('/login', login)
router.post('/createNote', createNote)
router.post('/updateNote', updateNote)
router.post('/deleteNote', deleteNote)
router.get('/logout', logout)

module.exports = router
