function sortedObjects(){
    let arrEmployees= [
        {name:"Theresa",id:"3653226253", salary:50000},
        {name:"Luka",id:"365278643826",salary:30000},
        {name:"resta",id:"25466726726",salary:20000}
    ]
    console.log(arrEmployees.sort((a,b)=>a.salary-b.salary))
}
sortedObjects()