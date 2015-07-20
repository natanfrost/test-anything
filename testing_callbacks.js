var repeatCallBack = require(process.argv[2])
var test = require('tape')

test('repeatCallBack', function (t) {
  t.plan(4)
  repeatCallBack(4, function() {
    t.pass('callback called')
  })
})
