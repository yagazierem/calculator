let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case "C":
                display.innerText = '';
                break;
            case "=":
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = 'Error!';
                }
                
                break;    
            default:
                display.innerText += e.target.innerText;
        }
    })
})



// const display = document.querySelector('#display');
// let displayScreen = document.querySelector('#display-math');
// const keys = document.querySelector(".grid-container");

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target;
//         const action = key.dataset.action;
//         const keyContent = key.textContent;
//         const displayNum = display.textContent;
//         if (!action) {
//             display.textContent = keyContent;
//             // console.log('number-key');
//         }
//     }
// })


// const calculate = (n1, operator, n2) => {
//     let result = ''
//     if (operator === 'add') {
//         result = parseFloat(n1) + parseFloat(n2)
//     } else if (operator === 'subtract') {
//         result = parseFloat(n1) - parseFloat(n2)
//     } else if (operator === 'multiply') {
//         result = parseFloat(n1) * parseFloat(n2)
//     } else if (operator === 'divide') {
//         result = parseFloat(n1) / parseFloat(n2)
//     }

//     return result
// }

// const calculator = document.querySelector('.calculator')
// const display = calculator.querySelector('.calculator_display')
// const keys = calculator.querySelector('.calculator_keys')

// keys.addEventListener('click', e => {
//     if (e.target.matches('button')) {
//         const key = e.target
//         const action = key.dataset.action
//         //when
//         //it
//         const keyContent = key.textContent
//           //follo
//         const displayedNum = display.textContent
//         const previousKeyType = calculator.dataset.previousKeyType
//         //remove
//         Array.from(key.parentNode.children)
//           .forEach(k => k.classList.remove('is-depressed'))  

//         if (!action) {
//             if (displayedNum === '0' || previousKeyType === 'operator') {
//                 display.textContent = keyContent
//             } else {
//                 display.textContent = displayedNum + keyContent
//             }
//         }  

//         if (action === 'decimal'){
//             // when a decimal is clicked after a number
//             display.textContent = displayedNum + '.'
//         }

//         if(
//             action === 'add' ||
//             action === 'subtract' ||
//             action === 'multiply' ||
//             action === 'divide' ||
            
//         ) {
//                 //highlight an operator when clicked
//             key.classList.add('is-depressed')
//             // add custom attribute to update the display to key pressed
//             calculator.dataset.previousKeyType = 'operator'
//             //storing the pressed keys before calculating
//             calculator.dataset.firstaValue = displayedNum
//             calculator.dataset.operator = action
//         } 
//         if (action === 'clear') {
//             console.log('clear key!')
//         }

//         if(action === 'calculate') {
//             //collecting the three values for calculation
//             const firstaValue = calculator.dataset.firstaValue
//             const operator = calculator.dataset.operator
//             const secondValue = displayedNum
    
//             display.textContent = calculate(firstaValue, operator, secondValue)
//         }

        
//     }
// })