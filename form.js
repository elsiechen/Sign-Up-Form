const confirmPwd = document.querySelector('#confirm');

confirmPwd.addEventListener('input', validatePwdMatch);

function validatePwdMatch(){
    const pwd = document.querySelector('#pwd');
    const confirmPwd = document.querySelector('#confirm');

    if(pwd.value !== confirmPwd.value){
        confirmPwd.setCustomValidity('Passwords do not match.');
    }else{
        confirmPwd.setCustomValidity('');
    }
}