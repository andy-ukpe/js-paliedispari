// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5)
// per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari
// o dispari (usando una funzione)

// UTENTE SCEGLIE SE PARI O DISPARI
var isOddUser = prompt('Scegli se pari o dispari');
ciclo di controllo input
while( (isOddUser == ' ') || () ){
  prompt('Errore! inserire pari o dispari');
}
var pari = false;
if(isOddUser == "pari"){
  var pari = true;
}

// UTENTE INSERISCE NUMERO DA 1 A 5
var numeroUser = prompt('Scegli un numero da 1 a 5');
ciclo di controllo input
while( isNaN(numeroUser) || (numeroUser < 1 || numeroUser > 5 ) ){
  prompt('Errore! inserire 1 o 5');
}
console.log(numeroUser);


// generare numero random per Pc
function generareNumPc(numeroMassimo){
  var numeroRandom = Math.floor(Math.random() * numeroMassimo ) + 1;
  return numeroRandom;
}

var numeroPc = generareNumPc(5);
console.log(numeroPc);

//SOMMIAMO I NUMERI
var somma = numeroPc + numeroUser;

// stabilire se la somma dei due numeri è pari o dispari
function isOddorEver(){
  var modulo = (somma % 2 == 0);
  return modulo
}
