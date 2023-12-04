// Riscrivi la funzione fetchDataFromAPI dell'esercizio Le Callback - 6 utilizzando Promises per una migliore gestione degli errori.
// La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.

function fetchDataFromAPI(callback) {
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data);
      }, 1000);
      return new Promise((resolve, reject) => {
        if(callback){
            resolve ('Recupero dati eseguito con successo.')
        } else {
            reject ("Errore durante il recupero dei dati.")
        }
      })
}

function handleData(data) {
    console.log("Fetched data:", data);
}

fetchDataFromAPI(handleData).then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
})
