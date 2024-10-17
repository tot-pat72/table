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

const th_lastname = document.createElement('th');
tr.appendChild(th_lastname);

th_lastname.innerHTML = 'vezeteknev';

const th_firstname1 = document.createElement('th');
tr.appendChild(th_firstname1);

th_firstname1.innerHTML = '1.keresztnev';

const th_firstname2 = document.createElement('th');
tr.appendChild(th_firstname2);

th_firstname2.innerHTML = '2.keresztnev';

const th_married = document.createElement('th')
tr.appendChild(th_married)
th_married.innerHTML = 'házastárs';

const th_pet = document.createElement('th')
tr.appendChild(th_pet)
th_pet.innerHTML = 'háziállat';

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

    if(firstname2Value === ' '){
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
    tbody.innerHTML = ' ';
    for(const pers of array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);

        
        const tbody_td_lastname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_lastname);
        
        tbody_td_lastname.innerHTML = pers.lastname;
    
        const tbody_td_firstname = document.createElement('td');
        tbody_tr.appendChild(tbody_td_firstname);
        
        tbody_td_firstname.innerHTML = pers.firstname1;
    
        if(pers.firstname2 === undefined){
            tbody_td_firstname.colSpan = 2
        }
        else{
            const tbody_td_firstname = document.createElement('td');
            tbody_tr.appendChild(tbody_td_firstname);
        
            tbody_td_firstname.innerHTML = pers.firstname2;
        }
    
        const tbody_td_married = document.createElement('td');
        tbody_tr.appendChild(tbody_td_married);
        tbody_td_married.innerHTML = pers.married;
    
        const tbody_td_pet = document.createElement('td');
        tbody_tr.appendChild(tbody_td_pet);
        tbody_td_pet.innerHTML = pers.pet;
    
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