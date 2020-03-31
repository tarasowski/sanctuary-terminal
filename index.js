const S = require('sanctuary')
const fs = require('fs')


const savetoJson = () => {
  const methods = Object.keys(s).map(x => ({name: x, description: '', sig: '', category: '', examples: ''}))
  fs.writeFile('./sanctuary-json-docs.json', JSON.stringify(methods), (e, d) => console.log(e))
}


