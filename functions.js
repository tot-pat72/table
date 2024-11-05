/**
 * 
 * @param {'td'|'th'} tagName 
 * @param {string} innerHTML 
 * @param {HTMLTableRowElement} parentElement 
 */

// Létrehozzuk a függvényt és a benne lévő elemeket. 
function createTableCell(tagName, innerHTML ,parentElement){
    const td = document.createElement(tagName) // A létrehozott változónkban eltároljuk a címkénket.
    td.innerHTML = innerHTML;
    parentElement.appendChild(td); // A változónkat hozzáadjuk a parentElementhez.
    return td;
}

function createHTMLElement(tag, id, parent) {
    const element = document.createElement(tag);
    element.id = id;
    parent.appendChild(element);
}

function createHTMLElementWithParentElementId(tag, id, parentid) {
    const parent_element = document.getElementById(parentid);
    if(parent_element != undefined) { // Ellenőrzi, hogy a parent_element létezik-e.
        createHTMLElement(tag, id, parent_element);
    }
}

function createTableHeaderCell() {
    const table_header_cell = document.getElementById('person_tr');
    createTableCell('th', "vezeteknev", table_header_cell);
    const keresztnev = createTableCell('th', "keresztnev", table_header_cell); // A keresztnevet eltároljuk egy változóban, hogy később meghívhassuk rá a colSpant.
    createTableCell('th', "házastárs", table_header_cell);
    createTableCell('th', "háziállat", table_header_cell);
    keresztnev.colSpan = 2;
}

function rendeltable(person_array) {
    const tbody = document.getElementById('person_tbody') // A person_tbody id-jü elemet eltároljuk egy változóban.
    tbody.innerHTML = ''; // Kiüríti a táblázatot.
    for(const pers of person_array){ // Végigmegy a tömbön.
        const tbody_tr = document.createElement('tr'); // Létrehoz egy új sort.
        tbody.appendChild(tbody_tr);

        createTableCell('td', pers.lastname, tbody_tr)

        const tbody_td_firstname = createTableCell('td', pers.firstname1, tbody_tr)
    
        if(!pers.firstname2){ // Ha nincs megadva a firstname2.
            tbody_td_firstname.colSpan = 2; // Akkor az egyetlen vezetéknév 2 helyet foglal el a cellában.
        }
        else{
            createTableCell('td', pers.firstname2, tbody_tr) // Ha van 2 keresztnév, akkor csak hozzá adja a cellához.
        }
    
        createTableCell('td', pers.married ? "igen" : "Nem", tbody_tr) // Hozzáadjuk a házas cellát.
    
        createTableCell('td', pers.pet, tbody_tr) // Hozzáadjuk a háziállat cellát.
    
        tbody_tr.addEventListener('click',function(e){
            
            const selected = tbody.querySelector('.selected');
            if(selected != undefined){
                selected.classList.remove('selected'); // Eltávolítja a kijelölést.
            }
            e.currentTarget.classList.add('selected'); // Kijelöli az aktuális sort.
    
        })
    }
}

// Érvényesíti a mezőket a függvényen belül.
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
    return result // Visszatér az érvényesítés eredményével.
}

function validateElements(fields){
    const parent = fields.parentElement // Lekéri a parent elemet.
    const error = parent.querySelector('.error') // Lekéri a hibajelző elemet.
    if (fields.value === '') {
        error.innerHTML = 'kötelező' // Hibát ír ki, ha a mező üres.
        return false;
    }
    error.innerHTML = '' // Törli a hibaüzenetet, ha a mező nem üres.
    return true;
}
