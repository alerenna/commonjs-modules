/* 

Crea una funzione che accetta due parametri: firstName, lastName. La funzione dovrebbe restituire un oggetto con le proprietà firstName e lastName.
Esporta la funzione dal file.

*/


function yourName(firstName, lastName) {

    const completeName = {}

    completeName.firstName = firstName
    completeName.lastName = lastName

    return completeName
    
}

module.exports = yourName