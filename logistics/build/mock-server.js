var express = require('express')
var proxy = require('http-proxy-middleware')
var router = express.Router()
var app = express()
var port = process.env.PORT || 80
// mock json
var resDataMethod = require('../routers/routers')

router.get('/aa', resDataMethod.homeList)
router.get('/bb', resDataMethod.mineList)
router.get('/cc', resDataMethod.otherList)

app.use('/api', router)

// 监听事件
app.listen(port, function () {
  console.log('success' + port)
})
