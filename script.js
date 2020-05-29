// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari
// o dispari (usando una funzione)


// generare numero random per Pc
function generareNumPc(numeroMassimo){
  var risultato = Math.floor(Math.random() * numeroMassimo ) + 1;
  return risultato;
}

var numeroPc = generareNumPc(5);
console.log(numeroPc);
