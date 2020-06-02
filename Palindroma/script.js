// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma

// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA
var parolaUtente = prompt('Inserisci una parola per scoprire se palindroma');

// verifica che non ci siano errori
while ( parolaUtente == ' ' || !isNaN(parolaUtente)) {
  parolaUtente = prompt('Errore! Inserisci una parola per scoprire se palindroma');
}
parolaUtente.toLowerCase();
parolaUtente.trim();

// scomporre la parola e creo array parola inserita
var arrayParolaUtente = parolaUtente.split("");

var stringaParolaUtente = arrayParolaUtente.join("");

console.log(stringaParolaUtente);

// trasformare parola inserita in stringa
var arrayInvertita = arrayParolaUtente.reverse();

var stringaParolaInvertita = arrayInvertita.join("");

console.log(stringaParolaInvertita);

// trasformo

function verificareSeOssimoro(stringaParolaInvertita, stringaParolaUtente){
  var risultato = false;
  if( stringaParolaInvertita == stringaParolaUtente ){
    risultato = true;
  }
  return risultato;
}

var paroleDaConfrontare = verificareSeOssimoro(stringaParolaInvertita, stringaParolaUtente);
  console.log(paroleDaConfrontare);

if (paroleDaConfrontare) {
  console.log(parolaUtente + ' è un ossimoro');
} else {
  console.log(parolaUtente + ' non è un ossimoro');
};
