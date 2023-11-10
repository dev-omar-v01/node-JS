//https://www.npmjs.com/
//first time command press terminal  [npm init -y]  and Enter

//auther project dependancy update [npm install]

const getRandomFruitsName = require('random-fruits-name')

console.log(getRandomFruitsName()) // Apple - English is default language
console.log(getRandomFruitsName('en')) 
console.log(getRandomFruitsName('es')) 
console.log(getRandomFruitsName('ja')) 
console.log(getRandomFruitsName('pt')) 
console.log(getRandomFruitsName('nl')) 
console.log(getRandomFruitsName('fr')) 
console.log(getRandomFruitsName('de')) 
