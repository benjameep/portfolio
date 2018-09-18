const d3 = require('d3-scale-chromatic');
const fs = require('fs');
const data = require('./data.json')
var tags = data.projects.reduce((tags,project) => {
  project.tags.forEach(tag => {
    tags[tag] = true;
  })
  return tags
},{})
data.tags = Object.keys(tags).reduce((tags,n,i,a) => {
  tags[n] = d3.interpolateRainbow(i/a.length)
  return tags
},{})
fs.writeFileSync("./data.json",JSON.stringify(data,null,2))