describe('Greet Exercise Function', function(){
    localStorage.clear()
    describe('Testing the names in different languages', function(){
        var gLang = greetLanguageRadio()
        it('Should return the name greated in Spanish', function(){
            
            gLang.langRun('spanish', 'Mcebo')
            gLang.nameLists('Mcebo')

            assert.equal('Hola, Mcebo', gLang.nameLists('Mcebo'))
        })
        it('Should return the name greated in isiZulu', function(){
            gLang.langRun('isiZulu', 'Mcebo')
            gLang.nameLists('Mcebo')

            assert.equal('Sawubona, Mcebo', gLang.nameLists('Mcebo'))
        })
        it('Should return the name greated in English', function(){
            gLang.langRun('english', 'Mcebo')
            gLang.nameLists('Mcebo')

            assert.equal('Hello, Mcebo', gLang.nameLists('Mcebo'))
        })
        it('Should return 1 for the counter since one name was greated', function(){
            assert.equal(1, gLang.getCounter())
        })
    })
    describe('Checking errors', function(){
        var gLang = greetLanguageRadio()
        it('Should return "Please pass a name" if left empty', function(){
          gLang.reset()
          gLang.checkErrors()
          assert.equal('Please pass a name', gLang.checkErrors() )
        })
    })

    describe('Returning all the names', function(){
        var gLang = greetLanguageRadio()
        gLang.reset()   
        it('Should return Should be able to add and greet the last person', function(){
            gLang.reset()  
            gLang.langRun('isizulu', 'Mcebo')
            gLang.nameLists('Mcebo')
            gLang.langRun('english', 'Samuel')
            gLang.nameLists('Samuel')
            gLang.langRun('spanish', 'Magagula')
            gLang.nameLists('Magagula')
            assert.equal('Hola, Magagula', gLang.nameLists('Magagula'))
            // assert.equal('Sawubona, Mcebo', gLang.nameLists('Mcebo'))
            // assert.equal('Hello, Smauel', gLang.nameLists('Samuel'))
        })
        it ('Should return the counter of which is 3', function(){
            assert.equal(3, gLang.getCounter())
        })
        it ('Should be able to return all the names on the list', function(){
            assert.deepEqual({ Mcebo: 1, Samuel: 1, Magagula: 1 }, gLang.getNameList())
            gLang.reset() 
        })
        

    })

})