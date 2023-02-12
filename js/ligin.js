// step-1 add click event handler with submite button
document.getElementById('btn-summary').addEventListener('click',function(){

const emailField = document.getElementById('user-email');
const email = emailField.value;
emailField.value = '';


// step-4 get password
const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    passwordField.value = '';
    console.log(email,password);


    // step-5 verify email and password
    // Danger: do not verify email and password on the client site
    if(email === 'sontan@bap.com' && password === '123456'){
        window.location.href = 'bank.html';
    }
    else{
        alert('tui password vule gesos!!!!! toke police e dibo beyadob');
    }
})
