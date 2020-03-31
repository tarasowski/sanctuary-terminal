const S = require('sanctuary')
const fs = require('fs')


const saveToJson = (obj) => 
  fs.writeFile('./docs.json', JSON.stringify(obj), (e, d) => console.log(e))

const docs = [
  {
    name: 'env',
    description: `The Sanctuary module's environment ((S.create ({checkTypes, env})).env is a reference to env). Useful in conjunction with create.`,
    sig: 'env :: Array Type',
    category: 'Initial',
    examples: [{
      input: 'S.env',
      output:'output of the func'

    }]
  },
  {
    name: 'equals',
    description: `Curried version of Z.equals that requires two arguments of the same type. To compare values of different types first use create to create a Sanctuary module with type checking disabled, then use that module's equals function.`,
    sig: 'equals :: Setoid a => a -> a -> Boolean',
    category: 'Fantasy Land',
    examples: [{
      input: 'S.equals (0) (-0)',
      output: true
    },
      {
        input: 'S.equals (NaN) (NaN)',
        output: true
      }
    ]
  },
  {
    name: 'concat',
    description: `Curried version of Z.concat.`,
    sig: 'concat :: Semigroup a => a -> a -> a',
    category: 'Fantasy Land',
    examples: [{
      input: 'S.concat ({x: 1, y: 2}) ({y: 3, z: 4})',
      output: '{"x": 1, "y": 3, "z": 4}'
    },
      {
        input: 'S.concat (S.Just ([1, 2, 3])) (S.Just ([4, 5, 6])',
        output: 'Just ([1, 2, 3, 4, 5, 6])'
      }
    ]
  }
]


const t = Object.keys(S)
  .map(x => docs.filter(x_ => x_.name === x).length > 0  
    ? docs.filter(x_ => x_.name === x)[0] 
    : {name: x, description: '', sig: '', examples: []}) 


saveToJson(t)

