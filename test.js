var bin = require('raml-generator/bin')
var fs = require('fs')
var generator = require('raml-generator')

var generate = generator({
  templates: {
    'index.js': fs.readFileSync(__dirname + '/templates/index.js.hbs', 'utf8')
  },
  helpers: {
   
  }
})


bin(generate, require('./package.json'), process.argv)
