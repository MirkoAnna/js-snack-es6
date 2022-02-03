/* Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore utilizzando destructuring e template literal*/

const bici = [
    {
        nome: 'bici1',
        peso: 5,
    },
    {
        nome: 'bici2',
        peso: 8,
    },

    {
        nome: 'bici3',
        peso: 2,
    },

    {
        nome: 'bici4',
        peso: 6,
    },
];

// Scorro tutto l'arrey di oggetti
for(let key in bici) {

    // Se peso da posizione 0 a posizione 3 è minore di peso in posizione 0
    if((bici[key]['peso']) < bici[0]['peso']) {
        let biciLeggera = bici[key];
        console.log(biciLeggera['peso']);
    }
}
