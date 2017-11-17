const db = require('../mock/db.js')

module.exports.homeList = (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    errno: 0,
    data: db
  })
}
