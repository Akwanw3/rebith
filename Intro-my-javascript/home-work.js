function update(){
    let header = document.getElementById('welcome');
    let input = document.getElementById('username');
    let inputtext = input.value;

    if(inputtext !==''){
        header.textContent= `Welcome, ${inputtext}!`;
        header.classList.add('active')
        input.value = ''
    }

}


function CheckEven(){
    let inp = document.getElementById('number');
    let imp = inp.value;
    let res = document.getElementById('result');

    if(imp!=='' && imp %2===0){
        res.textContent = `The number ${imp} is even`
    }else{
        res.textContent = `The number ${imp} is odd`
    }
    
}

let box = document.getElementById('box')
box.addEventListener('mouseover', function(){
    box.style.backgroundColor= 'tomato';
});
box.addEventListener('mouseout', function(){
    box.style.backgroundColor = 'yellow';
})


let inputbox = document.getElementById('inputbox');
let output = document.getElementById('output');
inputbox.addEventListener('keydown', function(event){
output.textContent= `you pressed: ${event.key}`
});



let btn = document.getElementById('colorBtn');
 btn.addEventListener('click', function(){
    document.body.style.backgroundColor= 'lightgreen';
 })
btn.addEventListener('dblclick', function(){
    document.body.style.backgroundColor = "white";
});
