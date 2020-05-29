
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

// UTENTE SCEGLIE SE PARI O DISPARI
  var isOddUser = prompt('Scegli se pari o dispari');
    isOddUser = isOddUser.toLowerCase();
// ciclo di controllo input
  while( (isOddUser == ' ') || (isOddUser != 'pari' && isOddUser != 'dispari') ){
    isOddUser = prompt('Errore! inserire pari o dispari');
  }
// verifico che l'input pari lo sia oppure sia dispari
   var pari;

   while (pari != true && pari != false) {
     if(isOddUser === "pari"){
      pari = true;
    } else{
      pari = false;
    }
  }
    console.log( 'condizione di verità: ' + pari);
   console.log(isOddUser);

// UTENTE INSERISCE NUMERO DA 1 A 5
  var numeroUser = prompt('Scegli un numero da 1 a 5');
// ciclo di controllo input
  while( isNaN(numeroUser) || (numeroUser < 1 || numeroUser > 5 ) ){
    numeroUser = prompt('Errore! inserire 1 o 5');
}
// GENERARE IL NUMERO PER IL PC
  function generareNumPc(numeroMassimo){
  var numeroRandom = Math.floor(Math.random() * numeroMassimo ) + 1;
  return numeroRandom;
}

  var numeroPc = generareNumPc(5);
  console.log('numero pc: ' + numeroPc);

// SOMMARE I NUMERI
  var somma = numeroPc + parseInt(numeroUser);
    console.log('questa è la somma: ' + somma);

// STABILIRE SE LA SOMMA DEI DUE NUMERI è PARI O DISPARI

  var sommaDaAnalizzare = verificareSePariODispari(somma);

function verificareSePariODispari(sommaDaAnalizzare){
  var risultato = false;
  if( somma % 2 == 0 ){
    risultato = true;
  }
  return risultato;
}
if(sommaDaAnalizzare === true && pari === true ) {
  console.log('Hai vinto! la somma è pari' + ' ' + somma);
}
else if(sommaDaAnalizzare === false && pari === false) {
  console.log('Hai vinto! la somma è dispari' + ' ' + somma);
}
else if (sommaDaAnalizzare === true && pari === false) {
  console.log('Hai perso! la somma è pari' + ' ' + somma);
}
else {
  console.log('Hai perso! la somma è dispari' + ' ' + somma);
}
