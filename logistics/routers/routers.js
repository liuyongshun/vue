const db = require('../mock/db.js')

module.exports.homeList = (req, res) => {
  // res.setHeader('Access-Control-Allow-Origin', '*')
  res.json({
    errno: 0,
    data: db.homeData
  })
}

module.exports.mineList = (req, res) => {
  res.json({
    errno: 0,
    data: db.mineData
  })
}

module.exports.otherList = (req, res) => {
  res.json({
    errno: 0,
    data: db.otherData
  })
}
