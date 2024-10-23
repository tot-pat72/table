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
const table = document.createElement('table');
document.body.appendChild(table);

const thead = document.createElement('thead');
table.appendChild(thead);

const tr = document.createElement('tr');
thead.appendChild(tr);

createTableCell('th', "vezeteknev", tr)
createTableCell('th', "1.keresztnev", tr)
createTableCell('th', "házastárs", tr)
createTableCell('th', "háziállat", tr)

const tbody = document.createElement('tbody');
table.appendChild(tbody);

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
        rendeltable()
    }

})

rendeltable()

function rendeltable() {
    tbody.innerHTML = '';
    for(const pers of array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);

        createTableCell('td', pers.lastname, tbody_tr)

        createTableCell('td', pers.firstname1, tbody_tr)
    
        if(pers.firstname2 === undefined){
            tbody_td_firstname.colSpan = 2
        }
        else{
            createTableCell('td', pers.firstname2, tbody_tr)
        }
    
        createTableCell('td', pers.married, tbody_tr)
    
        createTableCell('td', pers.pet, tbody_tr)
    
        tbody_tr.addEventListener('click',function(e){
            
            const selected = tbody.querySelector('.selected');
            if(selected != undefined){
                selected.classList.remove('selected');
            }
            e.currentTarget.classList.add('selected');
    
        })
    
        if(pers.married === true){
            tbody_td_married.innerHTML = 'igen'
        }
        else{
            tbody_td_married.innerHTML = 'nem'
        }
    }
}

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

/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML ,parentElement){
    const td = document.createElement(tagName)
    td.innerHTML = innerHTML;
    parentElement.appendChild(td)
}