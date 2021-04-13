function greetLanguageRadio() {
    

    var ListOfNames = []
    var languMessage = ''
    var person = ''

    function setGreet(langu, per) {
        if (langu === 'spanish'){
            languMessage = 'Hola, '
        } if (langu === 'isiZulu'){
            languMessage = 'Sawubona, '
        } if (langu === 'english') {
            languMessage = 'Hello, '
        }
        person = per
    }

    function listPerson(name1) {
        ListOfNames = name1
        if (!ListOfNames.includes(person)){
            ListOfNames.push(person)
            return ListOfNames
        }
        return ListOfNames
    }

    function getName() {
        if (ListOfNames[person] === undefined){
            return person
        }
    }

    function greetPerson() {
        if (ListOfNames[person] === undefined){
            return languMessage + person
        }
    }

    return {
        setGreet,
        getName,
        greetPerson,
        listPerson,
    }
}