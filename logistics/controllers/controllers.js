const db = require('../mock/db.js')

module.exports.homeList = function (req, res) {
  console.log('controll')
  res.json({
    errno: 0,
    data: db
  })
}
