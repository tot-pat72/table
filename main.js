let array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
        married: true,
        pet: 'kutya'
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
        married: false,
        pet: 'macska'
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
        married: false,
        pet: 'teknős'
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth',
        married: true,
        pet: 'macska'
    },
]

// Létrehoz HTML elemeket és hozzáfűzi ahoz az elemhez, amit megadtunk.
createHTMLElement('table', 'person_table', document.body);
createHTMLElementWithParentElementId('thead', 'person_thead', 'person_table');
createHTMLElementWithParentElementId('tr', 'person_tr', 'person_thead');

createTableHeaderCell(); // Meghívjuk a függvényt.

createHTMLElementWithParentElementId('tbody', 'person_tbody', 'person_table');

// Eseményfigyelő hozzáadása az űrlaphoz.
form.addEventListener('submit', function(e){
    e.preventDefault()
    const form = e.currentTarget; // Az eseményt kiváltó űrlap lekérése.

    if(validatefields(lastname, firstname1, pet)){
        // Mezők értékeinek felvétele az objektumba. 
        const newPerson = { 
            lastname : document.getElementById('lastname').value,
            firstname1 : document.getElementById('firstname1').value,
            firstname2 : document.getElementById('firstname2').value,
            married : document.getElementById('married').checked,
            pet : document.getElementById('pet').value
        }

        array.push(newPerson) // Hozzáadta a newPerson-t a array tömbhöz.
        rendeltable(array) // Meghívja a rendeltable függvényt a táblázat frissítéséhez az új adatokkal.
        
    }
    form.reset() // Az eddig beírt adatok törlése a cellából.
    
})

rendeltable(array);