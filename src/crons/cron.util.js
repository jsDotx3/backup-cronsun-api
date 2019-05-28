const fs = require('fs')
const date = require('date-format')
const currentDate = date.asString('dd-MM-yyyy_hh:mm', new Date())
const nameFile = `storage/crons_${currentDate}.json`
const request = require('../utils/request.util')

const backupCrons = (crons) => {
  crons.map(cron => {
    cron.latestStatus = null
    cron.rules.map(rule => {
      rule.nids = []
    })
  })

  return crons
}
const getAll = async () => {
  let response = {}
  response.data =
    await request({
      method: 'get',
      path: '/jobs',
      extraOptions: { json: true },
    })
  response.errorFile = false
  try {
    fs.writeFileSync(nameFile, JSON.stringify(backupCrons(response.data)))
  } catch (e) {
    response.errorFile = true
    response.messageError = e.message
  }
  return response
}

module.exports = { getAll }
