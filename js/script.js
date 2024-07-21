let $ = document

// Switch Forms
let BtnSwitchSignIn = $.getElementById('BtnSwitchSignIn')
let DisplayHideSignUp = $.getElementById('BtnSwitchSignUp')
let formSignUp = $.getElementById('DisplayHideSignUp')
let formSignIn = $.getElementById('DisplayHideSignIn')

function switchFormsIn () {
    formSignUp.style.display = 'block'
    formSignIn.style.display = 'none'
}
function switchFormUp () {
    formSignUp.style.display = 'none'
    formSignIn.style.display = 'block'
}

BtnSwitchSignIn.addEventListener('click', switchFormsIn)
DisplayHideSignUp.addEventListener('click', switchFormUp)


// Check Input Valiu =>

// Sign In
let userInputElem = $.getElementById('userElemInput')
let passInputElem = $.getElementById('PassElemInput')

let errorShowValueUser = $.getElementById('erorFiledUser')
let errorShowValuePass = $.getElementById('erorFiledPass')

function showErorInput () {
    if (!userInputElem.value) {
        errorShowValueUser.style.display = 'block'
    }else{
        errorShowValueUser.style.display = 'none'
    }

    if (!passInputElem.value) {
        errorShowValuePass.style.display = 'block'
    }else{
        errorShowValuePass.style.display = 'none'
    }
}

// Sign Up
let nameInputElemUp = $.getElementById('NameElemInputUp')
let userInputElemUp = $.getElementById('UserElemInputUp')
let passInputelemUp = $.getElementById('PassElemInputUp')

let errorShowValueNameUp = $.getElementById('erorFiledNameUp')
let errorShowValueUserUp = $.getElementById('erorFiledUserUp')
let errorShowValuePassUp = $.getElementById('erorFiledPassUp')

function showErorInputSignUp () {
    if (!nameInputElemUp.value) {
        errorShowValueNameUp.style.display = 'block'
    }else{
        errorShowValueNameUp.style.display = 'none'
    }

    if (!userInputElemUp.value) {
        errorShowValueUserUp.style.display = 'block'
    }else{
        errorShowValueUserUp.style.display = 'none'
    }

    if (!passInputelemUp.value) {
        errorShowValuePassUp.style.display = 'block'
    }else{
        errorShowValuePassUp.style.display = 'none'
    }
}