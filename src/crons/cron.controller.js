const { getAll } = require('./cron.util')

const index = async (req, res, next) => {
  let all = await getAll()
  if(all.errorFile === true)
    res.status(400).json(all);

  res.json(all)
}

module.exports = { index }
