var express = require('express')
var router = express.Router()
var app = express()
var port = process.env.PORT || 800
// mock json
var resDataMethod = require('../controllers/controllers')

router.get('/aa', resDataMethod.homeList)

app.use('/api', router)

// 监听事件
app.listen(port, function () {
  console.log('success' + port)
})
