let getId = (id) => document.getElementById(id);
let nameReg = /^[a-zA-Z]{2,20}$/;
let lastNameReg = /^[a-zA-Z]{2,20}$/;
let emailReg = /^[a-zA-Z0-9-.]*@[a-zA-Z]*\.gmail\.com$/;
let passwordReg = /^\w{8,15}$/;

let testName , testLastName ,testEmail,  testPass;
getId('name').oninput = function(){
    testName = nameReg.test(this.value)
    if(testName){
        this.style.border = '3px solid green'
    }
    else{
        this.style.border = '3px solid red'
    }
}

getId('lastname').oninput = function(){
    testLastName = lastNameReg.test(this.value)
    if(testLastName){
        this.style.border = '3px solid green'
    }
    else{
        this.style.border = '3px solid red'
    }
}

getId('mail').oninput = function(){
    testEmail = emailReg.test(this.value)
    if(testEmail){
        this.style.border = '3px solid green'
    }
    else{
        this.style.border = '3px solid red'
    }
}

getId('password').oninput = function(){
    testPass = passwordReg.test(this.value)
    if(testPass){
        this.style.border = '3px solid green'
    }
    else{
        this.style.border = '3px solid red'
    }
}

getId('agree').addEventListener('click',()=>{
    if(getId('agree').checked && testName && testLastName && testEmail && testPass){
        getId('signUp').disabled = false;
        getId('signUp').style.backgroundColor = ' rgb(0, 0, 255)';
        console.log('+');
    }
    else{
        getId('signUp').style.backgroundColor = 'rgb(69, 69, 212)';
    }
})

getId('signUp').addEventListener('click',()=>{
    document.querySelector('.box-show').style.display = 'block';
    document.querySelector('.box').style.display = 'none';
    document.body.style.backgroundColor = 'rgb(73, 73, 73)';
});

document.querySelector('.start').addEventListener('click',()=>{
    document.querySelector('.box-show').style.display = 'none';
    document.querySelector('.box').style.display = 'block';
    document.body.style.backgroundColor = 'lightgray';
    location.reload(); 
});
