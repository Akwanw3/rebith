/*
let title= document.getElementById('main-title');
console.log(title.textContent)
let items= document.getElementsByClassName('item');
console.log(items[1].textContent)
Array.from(items).forEach(item=>console.log(item.textContent))
let para= document.getElementsByTagName('p')
console.log(para.length)
let firstbtn= document.querySelector('.btn');
console.log(firstbtn.textContent)
let allbtn= document.querySelectorAll('.btn');
allbtn.forEach(btn=>console.log(btn.textContent))

*/



function calcuator(a, b, operation){
    if (operation === 'add') {
        return a + b;
    } else if (operation === 'subtract') {
        return a - b;
    } else if (operation === 'multiply') {
        return a * b;
    } else if (operation === 'divide') {
        return a / b;
    }else if(operation === 'modulus') {
        return a % b;}

     else {
        return 'Invalid operation';
    }
}
console.log(calcuator(10, 5, 'add'));        
console.log(calcuator(10, 5, 'subtract'));   
console.log(calcuator(10, 5, 'multiply'));
console.log(calcuator(10, 5, 'divide'));
console.log(calcuator(10, 5, 'modulus'));    // Invalid operation

function emailValidator(email) {
    return email.includes('@') && email.includes('.')
}
console.log(emailValidator('eufhuef@.com')); 



let header = document.getElementById('website');
console.log(header.textContent);
header.textContent = 'My updated website';  
console.log(header.textContent);

let firstMessage = document.getElementById('first-message');
console.log(firstMessage.textContent);



let section = document.querySelector('.first');
console.log(section);


let showingfirst = true;

function switchimage() {
    let image = document.getElementById('sucre');
    if (showingfirst) {
        image.src = '/sucre2.jpg';
        showingfirst = false;
    } else {
        image.src = '/sucre.jpg';
        showingfirst = true;
    }
}




function button() {
    let paragraph = document.getElementById('my-paragraph');
    
    // adding a class to the paragraph

    paragraph.classList.add('highlight');

    // removing a class from the paragraph

    paragraph.classList.remove('highlight');


    paragraph.classList.toggle('big-text');




    // checking if the paragraph has a class
    if (paragraph.classList.contains('big-text')) {
        console.log('Paragraph has the highlight class');
    } else {
        console.log('Paragraph does not have the highlight class');
    }
}


///show/hide password
function togglepassword() {
    let passwordField = document.getElementById('password');
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
    } else {
        passwordField.type = 'password';
    }
}




/// to do list
function addtask(){
  let input = document.getElementById('task-input');
  let tasklist = document.getElementById('task-list');  
  let taskText = input.value

  if(taskText !==""){
    tasklist.innerHTML += `<li>${taskText}</li>`;
    input.value = ''; 
  }
}

// form validator


function checkEmail(){
    let emailinput = document.getElementById('email');
    let errormessage = document.getElementById('error-message');
    let email = emailinput.value;

    if(email.includes('@') && email.includes('.')){
        errormessage.textContent = 'Oga your Email correct';
        errormessage.style.color = 'green';
    } else {
        errormessage.textContent = 'Please enter a valid email address Oga';
        errormessage.style.color = 'red';
    }
}


function switchtheme(){
    let body = document.querySelector('body');
    body.classList.toggle('dark-theme');

   
    
}


