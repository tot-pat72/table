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

createHTMLElement('table', 'person_table', document.body);
createHTMLElementWithParentElementId('thead', 'person_thead', 'person_table');
createHTMLElementWithParentElementId('tr', 'person_tr', 'person_thead');

createTableHeaderCell();

createHTMLElementWithParentElementId('tbody', 'person_tbody', 'person_table');


form.addEventListener('submit', function(e){
    e.preventDefault()
    const form = e.currentTarget;

    if(validatefields(lastname, firstname1, pet)){
        const newPerson = {
            lastname : document.getElementById('lastname').value,
            firstname1 : document.getElementById('firstname1').value,
            firstname2 : document.getElementById('firstname2').value,
            married : document.getElementById('married').checked,
            pet : document.getElementById('pet').value
        }

        array.push(newPerson)
        rendeltable(array)
        
    }
    form.reset()
    
})

rendeltable(array);