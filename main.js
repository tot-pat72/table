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

const form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault()
    const lastname = document.getElementById('lastname');
    const firstname1 = document.getElementById('firstname1');
    const firstname2 = document.getElementById('firstname2');
    const married = document.getElementById('married');
    const pet = document.getElementById('pet');

    const lastnameValue = lastname.value;
    const firstname1Value = firstname1.value;
    let firstname2Value = firstname2.value;
    const marriedValue = married.checked;
    const petValue = pet.value;

    if(firstname2Value === ''){
        firstname2Value = undefined;
    }

    if(validatefields(lastname, firstname1, pet)){
        const newPerson = {
            lastname : lastnameValue,
            firstname1 : firstname1Value,
            firstname2 : firstname2Value,
            married : marriedValue,
            pet : petValue
        }

        array.push(newPerson)
        rendeltable(array)
    }
    form.reset()
})

rendeltable(array);

function validatefields(lastname, firstname1, pet){
    let result = true
    if (lastname.value === '') {
        const apa = lastname.parentElement 
        const error = apa.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }

    if (firstname1.value === '') {
        const apa = firstname1.parentElement 
        const error = apa.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }

    if (pet.value === '') {
        const apa = pet.parentElement 
        const error = apa.querySelector('.error')
        error.innerHTML = 'kötelező'
        result = false
    }
return result
}
