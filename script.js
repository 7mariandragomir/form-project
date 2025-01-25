const passInput = document.getElementById('pass');
const passCheckInput = document.getElementById('confirm-pass');

let passwordValue, passwordCheckValue;

passInput.addEventListener('input', e => {
    passwordValue = e.target.value;
})

passCheckInput.addEventListener('input', e => {
    passwordCheckValue = e.target.value;
    
    if(!(passwordCheckValue === passwordValue) && !(passwordCheckValue === '')) {
        passCheckInput.classList.add('invalid');
        console.log(`${passwordValue} and ${passwordCheckValue}`)
    } else {
        passCheckInput.classList.remove('invalid');
    }
})

