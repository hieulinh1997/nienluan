
function addRestaurant(){
    var database = firebase.database()
    var restaurantRef = database.ref('/Questions')
    
    var restaurantInputA = document.getElementById('addRestaurantA')
    var restaurantAnswerA = restaurantInputA.value
    restaurantInputA.value = ''

    var restaurantInputQ = document.getElementById('addRestaurantQ')
    var restaurantQuestion =restaurantInputQ.value
    restaurantInputQ.value = ''

    var restaurantInputB = document.getElementById('addRestaurantB')
    var restaurantAnswerB = restaurantInputB.value
    restaurantInputB.value = ''

    var restaurantInputC = document.getElementById('addRestaurantC')
    var restaurantAnswerC = restaurantInputC.value
    restaurantInputC.value = ''

    var restaurantInputD = document.getElementById('addRestaurantD')
    var restaurantAnswerD = restaurantInputD.value
    restaurantInputD.value = ''

    var restaurantInputCa = document.getElementById('addCategoryId')
    var restaurantCategoryId = restaurantInputCa.value
    restaurantInputCa.value = ''

    var restaurantInputCo = document.getElementById('addCorrectAnswer')
    var restaurantCorrectAnswer = restaurantInputCo.value
    restaurantInputCo.value = ''

    var restaurantInputIs = document.getElementById('addIsImageQuestion')
    var restaurantIsImageQuestion = restaurantInputIs.value
    restaurantInputIs.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Please login.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        Question: restaurantQuestion,
        AnswerA: restaurantAnswerA,
        AnswerB: restaurantAnswerB,
        AnswerC: restaurantAnswerC,
        AnswerD: restaurantAnswerD,
        CategoryId: restaurantCategoryId,
        IsImageQuestion: restaurantIsImageQuestion,
        CorrectAnswer: restaurantCorrectAnswer
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
}


function addRestaurantA(){
    var database = firebase.database()
    var restaurantRef = database.ref('/Questions')
    
    var restaurantInputA = document.getElementById('addRestaurantA')
    var restaurantAnswerA = restaurantInputA.value
    restaurantInputA.value = ''

    var restaurantInputQ = document.getElementById('addRestaurantQ')
    var restaurantQuestion =restaurantInputQ.value
    restaurantInputQ.value = ''

    var restaurantInputB = document.getElementById('addRestaurantB')
    var restaurantAnswerB = restaurantInputB.value
    restaurantInputB.value = ''

    var restaurantInputC = document.getElementById('addRestaurantC')
    var restaurantAnswerC = restaurantInputC.value
    restaurantInputC.value = ''

    var restaurantInputD = document.getElementById('addRestaurantD')
    var restaurantAnswerD = restaurantInputD.value
    restaurantInputD.value = ''

    var restaurantInputCa = document.getElementById('addCategoryId')
    var restaurantCategoryId = restaurantInputCa.value
    restaurantInputCa.value = ''

    // var restaurantInputCo = document.getElementById('addCorrectAnswer')
    // var restaurantCorrectAnswer = restaurantInputCo.value
    // restaurantInputCo.value = ''

    var restaurantInputIs = document.getElementById('addIsImageQuestion')
    var restaurantIsImageQuestion = restaurantInputIs.value
    restaurantInputIs.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Please login.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        Question: restaurantQuestion,
        AnswerA: restaurantAnswerA,
        AnswerB: restaurantAnswerB,
        AnswerC: restaurantAnswerC,
        AnswerD: restaurantAnswerD,
        CategoryId: restaurantCategoryId,
        IsImageQuestion: restaurantIsImageQuestion,
        CorrectAnswer: restaurantAnswerA
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
    var a=0;
    if(a==0){
        alert("Bạn có chắc muốn thêm câu hỏi");
    }
}

function addRestaurantB(){
    var database = firebase.database()
    var restaurantRef = database.ref('/Questions')
    
    var restaurantInputA = document.getElementById('addRestaurantA')
    var restaurantAnswerA = restaurantInputA.value
    restaurantInputA.value = ''

    var restaurantInputQ = document.getElementById('addRestaurantQ')
    var restaurantQuestion =restaurantInputQ.value
    restaurantInputQ.value = ''

    var restaurantInputB = document.getElementById('addRestaurantB')
    var restaurantAnswerB = restaurantInputB.value
    restaurantInputB.value = ''

    var restaurantInputC = document.getElementById('addRestaurantC')
    var restaurantAnswerC = restaurantInputC.value
    restaurantInputC.value = ''

    var restaurantInputD = document.getElementById('addRestaurantD')
    var restaurantAnswerD = restaurantInputD.value
    restaurantInputD.value = ''

    var restaurantInputCa = document.getElementById('addCategoryId')
    var restaurantCategoryId = restaurantInputCa.value
    restaurantInputCa.value = ''

    // var restaurantInputCo = document.getElementById('addCorrectAnswer')
    // var restaurantCorrectAnswer = restaurantInputCo.value
    // restaurantInputCo.value = ''

    var restaurantInputIs = document.getElementById('addIsImageQuestion')
    var restaurantIsImageQuestion = restaurantInputIs.value
    restaurantInputIs.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Please login.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        Question: restaurantQuestion,
        AnswerA: restaurantAnswerA,
        AnswerB: restaurantAnswerB,
        AnswerC: restaurantAnswerC,
        AnswerD: restaurantAnswerD,
        CategoryId: restaurantCategoryId,
        IsImageQuestion: restaurantIsImageQuestion,
        CorrectAnswer: restaurantAnswerB
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
    var a=0;
    if(a==0){
        alert("Bạn có chắc muốn thêm câu hỏi");
    }
}

function addRestaurantC(){
    var database = firebase.database()
    var restaurantRef = database.ref('/Questions')
    
    var restaurantInputA = document.getElementById('addRestaurantA')
    var restaurantAnswerA = restaurantInputA.value
    restaurantInputA.value = ''

    var restaurantInputQ = document.getElementById('addRestaurantQ')
    var restaurantQuestion =restaurantInputQ.value
    restaurantInputQ.value = ''

    var restaurantInputB = document.getElementById('addRestaurantB')
    var restaurantAnswerB = restaurantInputB.value
    restaurantInputB.value = ''

    var restaurantInputC = document.getElementById('addRestaurantC')
    var restaurantAnswerC = restaurantInputC.value
    restaurantInputC.value = ''

    var restaurantInputD = document.getElementById('addRestaurantD')
    var restaurantAnswerD = restaurantInputD.value
    restaurantInputD.value = ''

    var restaurantInputCa = document.getElementById('addCategoryId')
    var restaurantCategoryId = restaurantInputCa.value
    restaurantInputCa.value = ''

    // var restaurantInputCo = document.getElementById('addCorrectAnswer')
    // var restaurantCorrectAnswer = restaurantInputCo.value
    // restaurantInputCo.value = ''

    var restaurantInputIs = document.getElementById('addIsImageQuestion')
    var restaurantIsImageQuestion = restaurantInputIs.value
    restaurantInputIs.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Please login.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        Question: restaurantQuestion,
        AnswerA: restaurantAnswerA,
        AnswerB: restaurantAnswerB,
        AnswerC: restaurantAnswerC,
        AnswerD: restaurantAnswerD,
        CategoryId: restaurantCategoryId,
        IsImageQuestion: restaurantIsImageQuestion,
        CorrectAnswer: restaurantAnswerC
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
    var a=0;
    if(a==0){
        alert("Bạn có chắc muốn thêm câu hỏi");
    }
}

function addRestaurantD(){
    var database = firebase.database()
    var restaurantRef = database.ref('/Questions')
    
    var restaurantInputA = document.getElementById('addRestaurantA')
    var restaurantAnswerA = restaurantInputA.value
    restaurantInputA.value = ''

    var restaurantInputQ = document.getElementById('addRestaurantQ')
    var restaurantQuestion =restaurantInputQ.value
    restaurantInputQ.value = ''

    var restaurantInputB = document.getElementById('addRestaurantB')
    var restaurantAnswerB = restaurantInputB.value
    restaurantInputB.value = ''

    var restaurantInputC = document.getElementById('addRestaurantC')
    var restaurantAnswerC = restaurantInputC.value
    restaurantInputC.value = ''

    var restaurantInputD = document.getElementById('addRestaurantD')
    var restaurantAnswerD = restaurantInputD.value
    restaurantInputD.value = ''

    var restaurantInputCa = document.getElementById('addCategoryId')
    var restaurantCategoryId = restaurantInputCa.value
    restaurantInputCa.value = ''

    // var restaurantInputCo = document.getElementById('addCorrectAnswer')
    // var restaurantCorrectAnswer = restaurantInputCo.value
    // restaurantInputCo.value = ''

    var restaurantInputIs = document.getElementById('addIsImageQuestion')
    var restaurantIsImageQuestion = restaurantInputIs.value
    restaurantInputIs.value = ''
    
    var currentUser = firebase.auth().currentUser
    if (!currentUser) {
        alert('Please login.')
        return Error('Not logged in!')
    }
    var uid = currentUser.uid
    
    restaurantRef.push({
        Question: restaurantQuestion,
        AnswerA: restaurantAnswerA,
        AnswerB: restaurantAnswerB,
        AnswerC: restaurantAnswerC,
        AnswerD: restaurantAnswerD,
        CategoryId: restaurantCategoryId,
        IsImageQuestion: restaurantIsImageQuestion,
        CorrectAnswer: restaurantAnswerD
    })
    .then(function(){
        window.location.reload()
    })
    .catch(function(error){
        console.log(error)
    })
    var a=0;
    if(a==0){
        alert("Bạn có chắc muốn thêm câu hỏi");
    }
}