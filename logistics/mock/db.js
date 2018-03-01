var Mock = require('mockjs')
var Random = Mock.Random

var homeData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'startAddress|+1': [
      Random.county(true)
    ],
    'endAddress|+1': [
      Random.county(true)
    ],
    'departTime': Random.datetime(),
    'unit|1-1000': 1000,
    'cityUltilityVehicle|1': [
      'A大车',
      'A中车',
      'A小车',
      'A家庭轿车',
      'A货运车',
      'A冷藏车',
      'A大风车',
      'A摩托车'
    ],
    'transportCapacity|1-1000': 1000,
    'goodsName|1': [
      'A一车大饼',
      'A两车萝卜',
      'A三车黄瓜',
      'A四车香蕉',
      'A幼儿园直达车',
      'A小学直达车',
      'A中学直达车',
      'Abilibili看片指日可待'
    ],
    'justShowForA': '只有A类展示'
  }]
})
var mineData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'startAddress|+1': [
      Random.county(true)
    ],
    'endAddress|+1': [
      Random.county(true)
    ],
    'departTime': Random.datetime(),
    'unit|1-1000': 1000,
    'cityUltilityVehicle|1': [
      'B大车',
      'B中车',
      'B小车',
      'B家庭轿车',
      'B货运车',
      'B冷藏车',
      'B大风车',
      'B摩托车'
    ],
    'transportCapacity|1-1000': 1000,
    'goodsName|1': [
      'B一车大饼',
      'B两车萝卜',
      'B三车黄瓜',
      'B四车香蕉',
      'B幼儿园直达车',
      'B小学直达车',
      'B中学直达车',
      'Bbilibili看片指日可待'
    ],
    'justShowForB': '只有B类展示'
  }]
})

var otherData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'startAddress|+1': [
      Random.county(true)
    ],
    'endAddress|+1': [
      Random.county(true)
    ],
    'departTime': Random.datetime(),
    'unit|1-1000': 1000,
    'cityUltilityVehicle|1': [
      'C大车',
      'C中车',
      'C小车',
      'C家庭轿车',
      'C货运车',
      'C冷藏车',
      'C大风车',
      'C摩托车'
    ],
    'transportCapacity|1-1000': 1000,
    'goodsName|1': [
      'C一车大饼',
      'C两车萝卜',
      'C三车黄瓜',
      'C四车香蕉',
      'C幼儿园直达车',
      'C小学直达车',
      'C中学直达车',
      'Cbilibili看片指日可待'
    ],
    'justShowForC': '只有C类展示'
  }]
})
module.exports = {
  homeData,
  mineData,
  otherData
}
