const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const $template = './template.ejs'
const $data = './data.json'
const $destination = '../index.html'

ejs.renderFile(
  path.join(__dirname,$template),
  require($data),
  {async:true})
  .then(html => 
    fs.writeFileSync(path.join(__dirname,$destination),html))