/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */
function createTableCell(tagName, innerHTML ,parentElement){
    const td = document.createElement(tagName)
    td.innerHTML = innerHTML;
    parentElement.appendChild(td);
    return td;
}

function createHTMLElement(tag, id, parent) {
    const element = document.createElement(tag);
    element.id = id;
    parent.appendChild(element);
}

function createHTMLElementWithParentElementId(tag, id, parentid) {
    const parent_element = document.getElementById(parentid);
    if(parent_element != undefined) {
        createHTMLElement(tag, id, parent_element);
    }
}

function createTableHeaderCell() {
    const table_header_cell = document.getElementById('person_tr');
    createTableCell('th', "vezeteknev", table_header_cell);
    const keresztnev = createTableCell('th', "keresztnev", table_header_cell);
    createTableCell('th', "házastárs", table_header_cell);
    createTableCell('th', "háziállat", table_header_cell);
    keresztnev.colSpan = 2;
}

function rendeltable(person_array) {
    const tbody = document.getElementById('person_tbody')
    tbody.innerHTML = '';
    for(const pers of person_array){
        const tbody_tr = document.createElement('tr');
        tbody.appendChild(tbody_tr);

        createTableCell('td', pers.lastname, tbody_tr)

        const tbody_td_firstname = createTableCell('td', pers.firstname1, tbody_tr)
    
        if(!pers.firstname2){
            tbody_td_firstname.colSpan = 2;
        }
        else{
            createTableCell('td', pers.firstname2, tbody_tr)
        }
    
        createTableCell('td', pers.married ? "igen" : "Nem", tbody_tr)
    
        createTableCell('td', pers.pet, tbody_tr)
    
        tbody_tr.addEventListener('click',function(e){
            
            const selected = tbody.querySelector('.selected');
            if(selected != undefined){
                selected.classList.remove('selected');
            }
            e.currentTarget.classList.add('selected');
    
        })
    }
}

function validatefields(lastname, firstname1, pet){
    let result = true;
    if(!validateElements(lastname)){
        result = false;
    }
    if(!validateElements(firstname1)){
        result = false;
    }
    if(!validateElements(pet)){
        result = false;
    }
    return result
}

function validateElements(fields){
    const parent = fields.parentElement 
    const error = parent.querySelector('.error')
    if (fields.value === '') {
        error.innerHTML = 'kötelező'
        return false;
    }
    error.innerHTML = ''
    return true;
}
