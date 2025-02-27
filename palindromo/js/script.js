
//0. far inserire la parola all'utente
//1. inserire la funzione per capire se è palindroma (nelle due versioni)
//2. riportare il risultato all'utente 

const userWord = prompt("Inserisci una parola");

/*
PRIMA FUNZIONE (semplificata):
parametri => la parola dell'utente 

0. converto la stringa in array
1. inverto l'array
2. riconverto l'array in strinta
3. confronto i risultati

valore da restituire => è palindroma | non è palindroma

*/

function palindromeCheck1 (word){
    const arrayWord = word.split("");
    const reverseArray = arrayWord.reverse();
    const joinArray = reverseArray.join("");

    let result;

    if(word === joinArray){
        result = "è palindroma";
    }else {
        result = "non è palindroma";
    }

    return result;
}

/*

SECONDA FUNZIONE (ciclo for):
parametri => la parola dell'utente 

0. controllo ogni singola lettera con un cliclo for confrontandola con la sua speculare
1. salvo il risultato i un array precedentemente creato
2. controllo con un ciclo for se nell'array ci siano dei valori false
3. cambio lo stato della variabile let precedentemente quotata

valore da restituire => è palindroma | non è palindroma

*/

function palindromeCheck2 (word){

    const control = [];

    let result = "è palindroma";

    for (let i = 0; i < word.length; i++){
        if (word[i] === word[(word.length - 1) - i]){
            control.push(true);
        }else {
            control.push(false);
        }
    }

   for (let i = 0; i < control.length; i++){
    if (control[i] === false){
        result = "non è palindroma";
    }
   }
    
   return result;

}

//1.
//2.

const message1 = `La parola ${palindromeCheck1(userWord)}`;

const message2 = `La parola ${palindromeCheck2(userWord)}`;

console.log(message1);

console.log(message2);
