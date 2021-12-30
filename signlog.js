
const signfunc=()=>{
    var signup = document .querySelector('.signup')
    var login = document .querySelector('.login')
    var user = document.getElementById('username')
    var usericon=document.getElementById('usericon')
    var forms= document.getElementById('format')
    var submit=document.querySelector('.submit')
    submit.innerHTML='submit'
    forms.style.marginTop='30px'
    usericon.style.visibility='visible'
    user.style.visibility='visible'
    signup.style.backgroundColor='white'
    login.style.backgroundColor='rgba(177, 170, 170, 0.493)'
    
}

const logfunc=()=>{
    var signup = document .querySelector('.signup')
    var login = document .querySelector('.login')
    var user = document.getElementById('username')
    var usericon=document.getElementById('usericon')
    var forms= document.getElementById('format')
    var submit=document.querySelector('.submit')
    submit.innerHTML='Login'
    forms.style.marginTop='0px'
    usericon.style.visibility='hidden'
    user.style.visibility='hidden'
    login.style.backgroundColor='white'
    signup.style.backgroundColor='rgba(177, 170, 170, 0.493)'
}