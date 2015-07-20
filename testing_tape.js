var test = require('tape')
var fancify = require(process.argv[2])

test('fancify the result~', function (t) {
  t.equal(fancify('hallo'), '~*~hallo~*~', 'string in the middle of ~*~')
  t.equal(fancify('hallo', true), '~*~HALLO~*~', 'string capitalized in the middle of ~*~')
  t.equal(fancify('hallo', false, '|'), '~|~hallo~|~', 'string in the middle of ~|~')
  t.end()
})
