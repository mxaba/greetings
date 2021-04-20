
function greetLanguageRadio() {

    var languMessage = ''
    var person = ''
    var nameList = {}
    var greetingsCounter = 0

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
            return 'Please pass a name'
        } if (languMessage == '' || languMessage == undefined){
            return 'Please Select a Language'
        }
    }

    //Converting the first Letter
    function capFirstLetter(str) {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }

    //Adding to the object
    function nameLists(name) {
        nameList = name
        if (nameList[person] === undefined){
            greetingsCounter++ 
            nameList[person] = 1
            return nameList
        } else {
            nameList[person] += 1
            return nameList
        }
    }

    function greetPerson(){
        return languMessage + person
    }

    function getCounter() {
        return greetingsCounter
    }

    function getNameList() {
        return nameList
    }

    function getNAmeOnList(name) {
        if (nameList[name] !== undefined){
            return false
        }
    }

    function reset() {
        localStorage.clear()
    }

    return {
        getNAmeOnList: getNAmeOnList,
        greetPerson: greetPerson,
        reset: reset,
        langRun : langRun,
        checkErrors : checkErrors,
        nameLists : nameLists,
        getCounter : getCounter,
        getNameList : getNameList,
        capFirstLetter : capFirstLetter
    }
}