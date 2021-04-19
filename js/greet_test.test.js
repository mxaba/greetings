describe('Greet Exercise Function', function(){
    describe('Testing the names in different languages', function(){
        var gLang = greetLanguageRadio()
        var list1 = {}
        it('Should return the name greated in Spanish', function(){
            
            gLang.langRun('spanish', 'Mcebo')

            assert.equal('Hola, Mcebo', gLang.greetPerson())
        })
        it('Should return the name greated in isiZulu', function(){
            gLang.langRun('isiZulu', 'Mcebo')

            assert.equal('Sawubona, Mcebo', gLang.greetPerson())
        })
        it('Should return the name greated in English', function(){
            gLang.langRun('english', 'Mcebo')

            assert.equal('Hello, Mcebo', gLang.greetPerson())
        })
        it('Should return 1 for the counter since one name was greated', function(){
            list1 = gLang.nameLists(list1)
            assert.equal(1, Object.keys(list1).length)
        })
    })
    describe('Checking errors', function(){
        var gLang = greetLanguageRadio()
        it('Should return "Please pass a name" if left empty', function(){
          gLang.checkErrors()
          assert.equal('Please pass a name', gLang.checkErrors() )
        })

        it('Should return "Please Select a Language" if not checked', function(){
            gLang.langRun('spanishaa', 'Mcebo')
            gLang.checkErrors()
            assert.equal('Please Select a Language', gLang.checkErrors() )
          })
    })

    describe('Returning all the names', function(){
        var gLang = greetLanguageRadio()
        var list1 = {}
        it('Should return the name greated in Spanish and add', function(){
            
            gLang.langRun('spanish', 'Mcebo')
            list1 = gLang.nameLists(list1)
            assert.equal('Hola, Mcebo', gLang.greetPerson())
        })
        it('Should return the name greated in isiZulu and add', function(){
            gLang.langRun('isiZulu', 'Samuel')
            list1 = gLang.nameLists(list1)
            assert.equal('Sawubona, Samuel', gLang.greetPerson())
        })
        it('Should return the name greated in English and add', function(){
            gLang.langRun('english', 'MCB')
            list1 = gLang.nameLists(list1)
            assert.equal('Hello, MCB', gLang.greetPerson())
        })
        it('Should return 3 for the counter since three names were greated', function(){
            
            assert.equal(3, Object.keys(list1).length)
        })
        it ('Should return the counter of which is 3', function(){
            assert.equal(3, gLang.getCounter())
        })
        it ('Should be able to return all the names on the list', function(){
            assert.deepEqual({ Mcebo: 1, Samuel: 1, MCB: 1 }, gLang.getNameList())
            // gLang.reset() 
        })
        

    })

})