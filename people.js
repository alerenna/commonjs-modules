/* 

Importa la tua funzione da names.js
Importa la tua funzione da hobbies.js
Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto. **

*/

const yourName = require ('./names')
const yourHobbies = require ('./hobbies')

function mySelf() {

    const user = {}

    const fullNameObj = yourName('Michele', 'Foresta')
    
    user.fullName = `${fullNameObj.firstName} ${fullNameObj.lastName}`

    user.hobbies = yourHobbies('danza', 'giardinaggio', 'pesca')

    return user
}

console.log(mySelf());



