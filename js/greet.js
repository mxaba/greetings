var greetButton = document.querySelector('.greetButton')
var greetText = document.querySelector('.greetText')
var greetTextArea = document.querySelector('.greetTextArea')
var count = document.querySelector('.numberCounter')
var clearButton = document.querySelector('.clearButton')
var errors = document.querySelector('.errors')
var greetLang = greetLanguageRadio()

if (localStorage['numberNames']) {
    greetLang.getCounter() = Number(localStorage['numberNames'])
} 

if (typeof localStorage['NamesStored'] !== 'undefined'){
    greetLang.getNameList() = JSON.parse(localStorage.getItem('NamesStored'))
}

count.innerHTML = greetLang.getCounter()

greetButton.addEventListener('click', function(){
    var checkedlanguageElem = document.querySelector("input[name='languageRadio']:checked")
    var namePerson = greetTextArea.value.trim()

    if (checkedlanguageElem){
        var checkedlanguage = checkedlanguageElem.value
        var namePerson1 = greetLang.capFirstLetter(namePerson)

        greetLang.langRun(checkedlanguage, namePerson1)
        greetText.innerHTML = greetLang.nameLists(namePerson1)
        count.innerHTML = greetLang.getCounter()
    } else {
        alert('Language not Checked')
        greetText.innerHTML = 'Plase Select the Language'
    }
    console.log(greetLang.getNameList())
})

clearButton.addEventListener('click', function(){
    greetLang.reset()
})
