var greetButton = document.querySelector('.greetButton')
var greetText = document.querySelector('.greetText')
var greetTextArea = document.querySelector('.greetTextArea')
var count = document.querySelector('.numberCounter')
var clearButton = document.querySelector('.clearButton')
var greet = greetLanguageRadio()
var greetedNames = []

// greetedNames = localStorage.getItem('names')
if (typeof localStorage['Names'] !== 'undefined') {
    greetedNames = localStorage.getItem('Names')
}

greetText.innerHTML = greet.greetPerson()
count.innerHTML = greetedNames.length


greetButton.addEventListener('click', function(){
    var checkedlanguageElem = document.querySelector("input[name='languageRadio']:checked")
    var namePerson = greetTextArea.value.trim()
    var checkedlanguage

    if (checkedlanguageElem){
        checkedlanguage = checkedlanguageElem.value
    } if (!checkedlanguageElem && namePerson ==''){
        alert('Enter a name and Select a language!')
    } if (!checkedlanguageElem){
        alert('Select a Langugae')
    } if (namePerson ==''){
        alert('Enter a name')
    }

    console.log(namePerson)
    if (!(checkedlanguage === undefined) && !(greetedNames.includes(namePerson))){
        greet.setGreet(checkedlanguage, namePerson)
        greetedNames = greet.listPerson(greetedNames)

        // var gNames = JSON.stringify(greetedNames)

        localStorage.setItem('Names', greetedNames )

        greetText.innerHTML = greet.greetPerson()
        count.innerHTML = greetedNames.length

        namePerson = ''
    }
    else {
        greet.setGreet(checkedlanguage, namePerson)
        greetText.innerHTML = greet.greetPerson()
    }

    console.log(greetedNames)
    
})

clearButton.addEventListener('click', function(){
    localStorage.clear()
    location.reload()
})
