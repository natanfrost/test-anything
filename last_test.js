var feedCat = require(process.argv[2])
var test = require('tape')

test('no chocolate to cats', function (t) {
  t.plan(2)
  t.equal(feedCat('food'), 'yum')
  t.throws(function (){
    feedCat('chocolate')
  })
})
