// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.
// 3. Ricordate che le stringhe sono una serie di lettere 



function palindrome() {
    const text = document.getElementById("text").value;
    const smallText = text.toLowerCase("").replace(/[\W_]/g, "");
    const reverseText = smallText.split("").reverse("").join(""); 
    let answer = ""
    if (reverseText === smallText) {
        answer = "✅ E'palindromo"
    } else{
        answer = "❌ Non e' palindromo"
    }
    document.getElementById("answer").innerHTML = text ? answer : ""
}    

// function palindrome() {
//     const text = document.getElementById("text").value;
//     const smallText = text.toLowerCase("").replace(/[\W_]/g, "");
//     // const reverseText = smallText.split("").reverse("").join(""); 
//     let answer = smallText.length;

//     for (let i = 0; i < answer/2; i++) {
//       if (text[i] !== text[smallText - 1 - i]) {
//         answer = "✅ E'palindromo"
//       }else{
//         answer = "❌ Non e' palindromo"
//       }
//       document.getElementById("answer").innerHTML = text ? answer : ""
//     }

// }




