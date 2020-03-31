const S = require('sanctuary')
const fs = require('fs')

const s = Object.keys(S)

const methods = s.map(x => ({name: x, description: '', sig: '', category: '', examples: ''}))

fs.writeFile('./sanctuary-json-docs.json', JSON.stringify(methods), (e, d) => console.log(e))

