const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password1 = document.getElementById('password');
const password2 = document.getElementById('password2');

// showError outline...
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}
// showSuccess outline...
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
    //const small = form.querySelector('small');
    //small.innerText = input.value;
}
// Validate Email...

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else{
        showError(input,'Email is not Valid');
    }
}
//check required..
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim()==''){
            showError(input,`${getFieldName(input)} is required`);
        }else{
            showSuccess(input);
        }
    })
}
// check length...
function checkLength(input,min,max) {
    if(input.value.length < min){
        showError(input,`${getFieldName(input)} must be atleast ${min} characters`);
    }else if(input.value.length > max){
        showError(input,`${getFieldName(input)} must be not more than ${max} characters`);
    }else{
        showSuccess(input);
    }
}
//check password 
function checkPassword(input1,input2){
    if(input1.value !== input2.value){
        showError(input2,'Password2 do not match');
    }
}
//getField Name...
function getFieldName(input){
    return input.id.charAt(0).toUpperCase()+input.id.slice(1);
}
// adding eventListeners.
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password1,password2]);    

    checkLength(username,3,8);
    checkLength(password1,6,12);
    checkEmail(email);
    checkPassword(password1,password2);
})

