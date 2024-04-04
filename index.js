// Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order
function arrange (){
    array= ["yesam","noming","imnatia","goah","Yetire"];
    newArray= [];
    array.forEach(element => {
        if (element[0]=="y"||element[0]=="Y"){
            let newWord = element.split("").sort().reverse().join('');
            newArray.push(newWord);
            
        }
    else{
        let newWord = element.split("").sort().join('');
        newArray.push(newWord);
    }
})
console.log(newArray)
}
arrange()


// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function search(){
    const arrNum=[20,-45,34,-8,97,-24,-45,0]
    arrNum.forEach(num =>{
        if(num>0){
            console.log("positive");
            return "positive"
        }
        else if (num<0){
            console.log("negative");
            return "negative"

        }
        else{
            console.log("zero")
            return "zero"
        }
    })
}
search()

// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function sortedObjects(){
    let arrEmployees= [
        {name:"Theresa",id:"3653226253", salary:50000},
        {name:"Luka",id:"365278643826",salary:30000},
        {name:"resta",id:"25466726726",salary:20000}
    ]
    console.log(arrEmployees.sort((a,b)=>a.salary-b.salary))
    return arrEmployees
}
sortedObjects()

// // // Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
const array2=[34,56,78,23,45,69,73,56,4]
function arrayFun(){
    array2.forEach(item=>{
        
        console.log(item*2)
    })
}
arrayFun(array2)

 // Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
// 
const numbers=[4,5,7,9,10,38,76,94,2,3];
function array1(){
    numbers.forEach((number,index)=>{
        if (index < 4){
            numbers[index]=number*8;
        }
        else if (index >= numbers.length-2){
            numbers[index]= number+5;
        }
    });
    console.log(numbers);
}
array1()