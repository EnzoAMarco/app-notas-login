const logout = (req, res) => {
  res.clearCookie('logUser')
  return res.json({status:1})
}
module.exports = logout