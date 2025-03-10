/* 

Crea una funzione che accetta tre parametri: hobbyOne, hobbyTwo, hobbyThree. La funzione dovrebbe restituire un array di stringhe contenenti gli hobby.
Esporta la funzione dal file.

*/

function yourHobbies(hobbyOne, hobbyTwo, hobbyThree) {

    const allHobbies = []

    allHobbies.push(hobbyOne, hobbyTwo, hobbyThree)

    return allHobbies
}

console.log(yourHobbies('Pesca', 'Nuoto', 'Giardinaggio'));
