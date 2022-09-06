// Target needed element
// output case
const card_number = document.querySelector('.card_number');
const cardholderName = document.querySelector('.cardholderName');
const month = document.querySelector('.month');
const year = document.querySelector('.year');
const cvc_code = document.querySelector('.cvc_number');

let form_output = document.querySelectorAll('.output')

// form input
const form = document.querySelector('form');
const card_form = document.querySelector('.card_form');
const inputs = document.querySelectorAll('.input');
const number_inputs = document.querySelectorAll('.number_input');
const thank_you = document.querySelector('.thank_you');

const cardholder_name = document.getElementById('cardholder_name');
const card_number_input = document.getElementById('card_number_input');
const month_input = document.getElementById('month_input');
const year_input = document.getElementById('year_input');
const cvc_number = document.getElementById('cvc_code');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    inputs.forEach((input) => {
        if (input.value === "") {
            const parent = input.parentElement.parentElement
            const error_text = parent.querySelector('.error')
            error_text.innerText = "Can't be empty";
            input.classList.add('error_border');  
        }
        else if(input.value !== '') {
            // if (input.id === 'cardholder_name') {
            //     cardholderName.textContent = input.value;
            // }
            // else if (input.id === 'card_number_input') {
            //     card_number.textContent = input.value;
            // }
            // else if (input.id === 'month_input') {
            //     month.textContent = input.value
            // }
            // else if (input.id === 'year_input') {
            //     year.textContent = input.value
            // }
            // else if (input.id === 'cvc_code') {
            //     cvc_code.textContent = input.value
            // }

            // card_form.style.display = 'none'
        }
        
    }) 

    if (cardholder_name.value !== '' && card_number_input.value !== '' && month_input.value !== '' && year_input.value !== '' && cvc_number.value !== '') {
        number_inputs.forEach((number_input) => {
            const inputValue = number_input.value.split(' ');
            console.log(inputValue);
            if (isNaN(inputValue.join(''))) {
                const parent = number_input.parentElement.parentElement
                const wrong_format = parent.querySelector('.wrong_format')
                // console.log(parent);
                wrong_format.innerText = "Wrong format, numbers only";
                number_input.classList.add('error_border');
            }
            else {
                card_form.style.display = "none";
                thank_you.style.display = "block";
            }
            
        })
        
    }

    
})

inputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.id === 'cardholder_name') {
                cardholderName.textContent = input.value;
        }
        else if (input.id === 'card_number_input') {
            card_number.textContent = input.value;
        }
        else if (input.id === 'month_input') {
            month.textContent = input.value
        }
        else if (input.id === 'year_input') {
            year.textContent = input.value
        }
        else if (input.id === 'cvc_code') {
            cvc_code.textContent = input.value
        }
    })
})