let btn =  document.querySelector('.btn');
btn.addEventListener('click', function(){
    alert('you clicked me')
})

let form = document.getElementById('myForm');
form.addEventListener('submit', function(event){
    event.preventDefault();
    alert('form submitted')
})




let input = document.getElementById('myinput');
input.addEventListener('keyup', function(){
    alert(`you typed: ${input.value}`)
})    