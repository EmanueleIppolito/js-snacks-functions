/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.

function greet(name){
    return `Ciao ${name}`;
}

const greetings = (userName) => `Ciao ${userName}`;

// Invoca la funzione qui e stampa il risultato in console

console.log(greet(userName));

console.log(greetings("Mario"));
//Risultato atteso se si passa 'Mario': // ciao Mario
