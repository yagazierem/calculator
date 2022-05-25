const numBtn = document.querySelector('#numB');
// let displayScreen = document.querySelector('#display-math');
const keys = document.querySelector(".grid-container");

keys.addEventListener('click', e => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = numBtn.textContent;
        if (!action) {
            numBtn.textContent = keyContent;
            // console.log('number-key');
        }
    }
})


// function displayValue() {
//     return displayScreen.innerHTML += numBtn.innerHTML;
// }

// function displayValue() {
//     document.getElementById("numB").innerHTML += '6';
// }
