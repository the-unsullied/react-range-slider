/* */ 
var balanced = require('../balanced-match@0.3.0');
console.log(balanced('{', '}', 'pre{in{nested}}post'));
console.log(balanced('{', '}', 'pre{first}between{second}post'));
