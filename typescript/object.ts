// const detail:{name:string,id:number,dob?:string,phone:number}={
//     name:"varun Chauhan",
//     phone:9760246256,
//     id:1
// }

// console.log(detail)

function greet(name:string):{msg:string,date:string}{
    return{
        msg:`hello ${name}`,
        date:(new Date()).toLocaleDateString()
    }
}

console.log(greet("Varun Chauhan"))