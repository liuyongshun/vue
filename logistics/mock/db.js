var Mock = require('mockjs')
var Random = Mock.Random

var homeData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'startAddress|+1': [
      '河北省唐山市',
      '浙江省杭州市',
      '河北省张家口市',
      '上海市',
      '河南省郑州市'
    ],
    'endAddress|+1': [
      '天津市',
      '北京市',
      '广东省广州市',
      '甘肃省宁夏市',
      '西藏拉萨'
    ],
    'departTime': Random.datetime(),
    'unit|1-1000': 1000,
    'cityUltilityVehicle|1': [
      '大车',
      '中车',
      '小车',
      '家庭轿车',
      '货运车',
      '冷藏车',
      '大风车',
      '摩托车'
    ],
    'transportCapacity|1-1000': 1000,
    'goodsName|1': [
      '一车大饼',
      '两车萝卜',
      '三车黄瓜',
      '四车香蕉',
      '幼儿园直达车',
      '小学直达车',
      '中学直达车',
      'bilibili看片指日可待'
    ]
  }]
})
var mineData = Mock.mock({
  'list|1-10': [{
    'id|+1': 1,
    'startAddress|+1': [
      '河北省唐山市',
      '浙江省杭州市',
      '河北省张家口市',
      '上海市',
      '河南省郑州市'
    ],
    'endAddress|+1': [
      '天津市',
      '北京市',
      '广东省广州市',
      '甘肃省宁夏市',
      '西藏拉萨'
    ],
    'departTime': Random.datetime(),
    'unit|1-1000': 1000
  }]
})

module.exports = {
  homeData,
  mineData
}
