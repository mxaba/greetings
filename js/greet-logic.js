function greetLanguageRadio() {

    var languMessage = ''
    var person = ''
    var nameList = {}
    var greetingsCounter = 0

    
    if (localStorage['numberNames']) {
        greetingsCounter = Number(localStorage['numberNames'])
    } 
    
    if (typeof localStorage['NamesStored'] !== 'undefined'){
        nameList = JSON.parse(localStorage.getItem('NamesStored'))
    }

    function langRun(la, per) {
        if (la == 'spanish'){
            languMessage = 'Hola, '
        } if (la == 'isiZulu'){
            languMessage = 'Sawubona, '
        } if (la == 'english'){
            languMessage = 'Hello, '
        }
        person = per
        // return languMessage + person
    }

    function checkErrors() {
        if (person == ''){
            return 'Please pass a string/Name of a person'
        } if (languMessage == '' || languMessage == undefined){
            return 'Check one of the languages using the Radio'
        }
    }

    //Converting the first Letter
    function capFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    //Adding to the object
    function nameLists(name) {
        var comb = languMessage + person
        if (name != ''){
            if (nameList[name] === undefined){
                greetingsCounter++
                localStorage.setItem('numberNames', greetingsCounter)  
                nameList[name] = 1
                localStorage.setItem('NamesStored', JSON.stringify(nameList))  
            }
            return comb
        } else {
            alert('Please Pass a String')
            return "You can't leave it empty!"
        }
        
    }

    function getCounter() {
        return greetingsCounter
    }

    function clearNumb() {
        greetingsCounter = 0
        return greetingsCounter
    }

    function getNameList() {
        return nameList
    }

    function reset() {
        localStorage.clear()
        location.reload()
    }
     function clear() {
         localStorage.clear()
     }

    return {
        clear: clear,
        clearNumb: clearNumb,
        reset: reset,
        langRun : langRun,
        checkErrors : checkErrors,
        nameLists : nameLists,
        getCounter : getCounter,
        getNameList : getNameList,
        capFirstLetter : capFirstLetter
    }
}