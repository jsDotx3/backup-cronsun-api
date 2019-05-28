const index = (req, res, next) => {
  res.json({ message: 'Welcome to Cronsun Backup API' })
}

module.exports = { index }
