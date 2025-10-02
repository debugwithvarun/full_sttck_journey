import { z } from "zod"

const UserShape = z.object(
  {
    name: z.string(), age: z.number(), married: z.boolean(), email: z.email()
  }
)


type user=z.infer<typeof UserShape>

const person1:user={
  name:"varun",
  age:2,
  married:false,
  email:"23@f.aos"
}

try{

  console.log("no error \n \n \n ",UserShape.parse(person1))
}
catch(error){
  console.log("new error \n \n \n ",error)
}

// const userData={
//   name:"Varun Chauhan",
//   age:25,
//   married:false,
//   email:"vc28022004@gmail.com"
// }

// 1.parse 
// const validation=UserShape.parse(userData)

// 2.safeparse 
// const validation=UserShape.safeParse(userData)

// console.log(validation)


// const userShape=z.object({
//   name:z.string(),
//   adress:z.object({
//     city:z.string(),
//     pin:z.number()
//   })
// })


// console.log(userShape.parse({
//   name:"varun Chauhan",
//   adress:{
//     city:"dhampur",
//     pin:2323
//   }
// }))


// const hobbieSchema=z.array(z.string())

// console.log(hobbieSchema.parse(["Varun chauhan","ojit chuahan","niketa chuahan"]))


// const roleSchema=z.enum(["admin","user","guest"])

// console.log(roleSchema.parse("a"))


