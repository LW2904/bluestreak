const functions = {
  valid: require('./lib/valid'),
  activity: require('./lib/activity'),
  statistics: require('./lib/statistics')
}

const rls = require('readline-sync')

let f = rls.keyInSelect(Object.keys(functions), `Choose function: `)

functions[Object.keys(functions)[f]]() // Holy fuck this is ugly.
