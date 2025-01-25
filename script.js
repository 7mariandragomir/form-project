const passInput = document.getElementById('pass');
const passCheckInput = document.getElementById('confirm-pass');
const submitBtn = document.getElementById('submit-btn');

let passwordValue, passwordCheckValue;

passInput.addEventListener('input', e => {
    passwordValue = e.target.value;
})

passCheckInput.addEventListener('input', e => {
    passwordCheckValue = e.target.value;
    
    if(!(passwordCheckValue === passwordValue) && !(passwordCheckValue === '')) {
        passCheckInput.classList.add('invalid');
        submitBtn.disabled = true;
    } else {
        passCheckInput.classList.remove('invalid');
        submitBtn.disabled = false;
    }
})

