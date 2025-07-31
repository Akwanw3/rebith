console.log('hello from my side')
console.warn('watch out!')
console.error('An error has occor')
let name = 'Liberty'
const birthyear = 2003
var hobby = 'coding'
let city ='lagos'
let age =25
let score= 99.5
let Ishappy= true
let result= null
let namesis
let fruits =[ 'apple', 'banana', 'mango',' cucumber']
let profile ={
    username:'Lily',
    role: 'Student',
}
console.log( name, age, Ishappy,result, fruits, profile)

console.log(4+ '2')
console.log(typeof null)
let a=[1, 2]
let b=[1, 2]
console.log( a == b)
console.log( JSON.stringify(a) == JSON.stringify(b))
console.log(a.toString == b.toString)
console.log(a.length === b.length)

let count = 0;
(function(){
    count++;
    console.log(count)
})();
console.log( []== false)

let x;
console.log(x ?? 'Default')

let food =[ 'afang', 'editan', 'melon', 'okra', 'atama']
console.log(food[2])
console.log(food)
food[0]= 'banga'
console.log(food)
food.push('ubabad')
console.log(food)

console.log(food.length)

let scores = [20, 30, 22, 12, 55, 17, 89, 90, 29]
console.log(scores)
scores.unshift(99)
console.log(scores)
scores.pop()
console.log(scores)
console.log(scores.length)
console.log(scores[1])



let marks= [ 10, 20, 30, 40, 50, 60, 70, 80, 90]
console.log(marks)

let total =0
let countabove75 = 0

for (let i=0; i<marks.length;i++){
    console.log('score:', marks[i]); 
    
    total+= marks[i];

    if (marks[i]> 75){
        countabove75++
    }
}

let avg = total/ marks.length;

console.log('total:', total);
console.log('avg:',avg);
console.log('scores above 70:', countabove75)




let results =[ 85, 42, 77, 95, 66, 58, 49];

let numberofpass=0
let numberoffail =0
 
for (let r=0; r<results.length; r++){

   if(results[r]>=50)
    console.log(results[r] +' '+'is pass')
else{
    console.log(results[r]+' '+'is fail')
}

if( results[r]>50){
    numberofpass++
}
else{
    numberoffail++
}
    
}
console.log(numberofpass+ ' '+ 'students passed')
console.log(numberoffail+' '+ 'students failed')


let scorgrade = [ 92, 76, 88, 59, 47, 67, 81];
for( let g=0; g<scorgrade.length; g++){
    let scr= scorgrade[g]
    let grade = '';

    if (scr>=90){
        grade='A'
    }else if(scr>=80){
        grade= 'B'
    }else if (scr>=70){
        grade= 'C'
    }else if (scr>=60){
        grade= 'D' 
    }else{
        grade= "F"
    }
    console.log(`score: ${scr} - Grade: ${grade}`)
}






