var resDataMethod = require('../controllers/controllers')
console.dir(resDataMethod.homeList)
module.exports = function (app) {
  // todoList Routes
  router.get('/aa', resDataMethod.homeList)
}
