var greetButton = document.querySelector('.greetButton')
var greetText = document.querySelector('.greetText')
var greetTextArea = document.querySelector('.greetTextArea')
var count = document.querySelector('.numberCounter')
var clearButton = document.querySelector('.clearButton')
var greetLang = greetLanguageRadio()
var errorMes = document.querySelector('.errorMes')

var List = {}

if (typeof localStorage['NamesStored'] !== 'undefined'){
    List = JSON.parse(localStorage.getItem('NamesStored'))
}

count.innerHTML = Object.keys(List).length

greetButton.addEventListener('click', function(){
    var checkedlanguageElem = document.querySelector("input[name='languageRadio']:checked")
    var namePerson = greetTextArea.value.trim()

    if (!checkedlanguageElem && namePerson ==""){
        errorMes.innerHTML = "Please enter a name and Select a language!"
    } if (!checkedlanguageElem){
        errorMes.innerHTML = "Please Select a language!"
    } if (namePerson == "" || !/[a-zA-z]$/.test(namePerson)) {
        errorMes.innerHTML = "Enter a name/not numbers or special characters"
    } 
    setTimeout(function(){
        errorMes.innerHTML = ""
        }, 2099)

        var checkedlanguage = checkedlanguageElem.value
        var namePerson1 = greetLang.capFirstLetter(namePerson)
    if (checkedlanguageElem && /[a-zA-z]$/.test(namePerson) && List[namePerson] === undefined){

        greetLang.langRun(checkedlanguage, namePerson1)
        List = greetLang.nameLists(List)
        localStorage.setItem('NamesStored', JSON.stringify(List))
        greetText.innerHTML = greetLang.greetPerson()
        count.innerHTML = Object.keys(List).length
    } else {
        greetText.innerHTML = checkedlanguage +  ', ' + namePerson1
    }
    setTimeout(function(){
        greetText.innerHTML = ""
        }, 8000)
    greetTextArea.value = ""
    console.log(List)
    console.log(Object.keys(List).length)
})

clearButton.addEventListener('click', function(){
    greetLang.reset()
    location.reload()
})
