/*Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà:
Punti fatti e falli subiti.
Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.*/



// Creo arrey di oggetti di squadre di calcio con proprietà punti fatti e falli subiti settati a 0.
const squadre = [
    {
        nome: 'roma',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'napoli',
        puntiFatti: 0,
        falliSubiti: 0
    },

    {
        nome: 'fiorentina',
        puntiFatti: 0,
        falliSubiti: 0
    },
];

// Do un valore diverso per ogni proprietà settata a 0
for(let key in squadre) {
    
    squadre[key]['puntiFatti'] = Math.floor(Math.random() * 70 + 1);;
    squadre[key]['falliSubiti'] = Math.floor(Math.random() * 70 + 1);;

}

// Creo un nuovo array
const puntiFalli = [];

for (let key in squadre) {
    let {puntiFatti, falliSubiti} = squadre[key];
    puntiFalli.push({
        puntiFatti: puntiFatti, falliSubiti: falliSubiti
    })
}
console.log(puntiFalli);

