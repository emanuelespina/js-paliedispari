
// 0. chiedere all'utente di scegliere tra pari e dispari
// 1. chiedere all'utente di scegliere un numero da 1 a 6
// 2. generare un numero casuale 
// 3. sommare i due nuemri
// 4. capiere (tramite funzione) se il numero è pari o dispari e confrontarlo con la scelta dell'utente
// 5. dire all'utente se ha vinto o perso 

const userChoice = prompt("Scegli pari o dispari");

const userNumStr = prompt("scegli un numero da 1 a 6");

const userNum = parseInt(userNumStr)

const randNum = getRndInteger(1, 6);


// FUNZIONI

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pariDispari(num) {

    let result;

    if (num % 2 === 0) {
        result = "pari";
    } else {
        result = "dispari"
    }

    return result

}

// *************

const sum = userNum + randNum;

console.log(sum);

console.log(pariDispari(sum));

let finalMessage;

if (userChoice === pariDispari(sum)) {
    finalMessage = `Congratulazioni hai vinto scegliendo ${userChoice} e il numero ${userNum}, il computer ha estratto il num ${randNum}`;
} else {
    finalMessage = `Spiacente hai perso segliendo ${userChoice} e il numero ${userNum}, il computer ha estratto il num ${randNum} sarai più fortunato la prossima volta`;
}

alert(finalMessage);