var listName = document.querySelector('.listName')
var listNameB = document.querySelector('.listNameB')
var greetRa = greetLanguageRadio()

var nameList1 = {}

if (typeof localStorage['NamesStored'] !== 'undefined'){
    nameList1 = JSON.parse(localStorage.getItem('NamesStored'))
}

function listNames(){
   console.log(nameList1)
}

listNameB.addEventListener('click', listNames)
