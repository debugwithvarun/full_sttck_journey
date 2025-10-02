import { ApolloServer } from "@apollo/server"

import { startStandaloneServer } from "@apollo/server/standalone"

// 1. Basic graphql queries 
// const typeDefs=`#graphql
// type Query{
// name:String
// id:ID
// age: Int
// isActive:Boolean
// height: Float

// }
// `
// const resolvers={
//     Query:{
//         name:()=>"varun chauhan",
//         id:()=>"12",
//         age:()=>22!,
//         isActive:()=>true,
//         height:()=>5.7!
//     }
// }

// 2.custom type in graphql 
// const typeDefs=`#graphql
// type Post{
//     id:ID!
//     title :String
//     body:String!
//     tags:[String]
// }

// type Query{
//     post:[Post]
// }
// `

// const resolvers={
//     Query:{
//         post:()=>[
//             {id:1,title:"Ojit",body:"this is my first post",tags:["#12","#MY"]},
//             {id:2,title:"Varun",body:"this is my Second post",tags:["#22","#You"]}
//         ]
//     }
// }

// 3. array in graphql 
// const typeDefs=`#graphql
// type Data{
//     name:[String]
//     num:[Int]
//     age:[Int]
// }
// type Query{
//     data:[Data!]!
// }
// `


// const resolvers ={
//     Query:{
//         data:()=>[
//             {
//                 name:["varun","ojit"],
//                 num:[1,2,3],
//                 age:[22,23,24]
//             },
//             {
//                 name:["niku","ojit"],
//                 num:[1,2,3],
//                 age:[22,23,24]
//             },
//             {
//                 name:["niku","varun"],
//                 num:[1,2,3,12,1],
//                 age:[22,23,24]
//             },
//             {
//                 name:["niku ","ojit"],
//                 num:[1,2,3],
//                 age:[22,23,24]
//             },
//         ]
//     }
// }


// 4. Operation Arguments 
// const typeDefs=`#graphql
// type Query{
//     greeting(name:String):String
//     add(a:Int,b:Int):Int
// }
// `

// const resolvers={
//     Query:{
//         greeting(parent: any, args: { name?: string }, ctx: any, info: any) {
//             return `my name is ${args.name}`
//         },
//         add(_,args:{a:number,b:number}){return args.a+args.b}
//     }

// }


// 5.RealtionShip in Graphql 

// const ItemList=[
//     {
//         id:"1",
//         name:"smasung watch",
//         price:5000,
//         quantity:40,
//         category:"Watch"
//     },
//     {
//         id:"2",
//         name:"Redmi watch",
//         price:5000,
//         quantity:40,
//         category:"Watch"
//     },
//     {
//         id:"3",
//         name:"Redmi Tv",
//         price:5000,
//         quantity:40,
//         category:"Tv"
//     },
//     {
//         id:"4",
//         name:"Realme Tv",
//         price:5000,
//         quantity:40,
//         category:"Tv"
//     },
// ]

// const categorsList=[
//     {id:"101",name:"Watch"},
//     {id:"102",name:"Tv"},
//     {id:"103",name:"Dryer"},
// ]

// const typeDefs=`#graphql
// type Item{
//     id:String!
//     name:String!
//     price:Int!
//     quantity:Int!
//     category:Category!

// }

// type Category{
//     id:String!
//     name:String!
//     noItem:Int!
//     item:[Item!]!
// }

// type Query{
//     items:[Item!]!
//     categories:[Category!]!
// }
// `

// const resolvers={
//     Query:{
//         items:()=>ItemList,
//         categories:()=>categorsList
//     },
//     Category:{
//         noItem:(parent:any)=>{
//             return ItemList.reduce((count,item)=>{
//                 return item.category===parent.name ? count+1:count
//             },0)
//         },
//         item:(parent:any)=>{
//             return ItemList.filter((item)=>item.category===parent.name)
//         }
//     },
//     Item:{
//         category:(parent:any)=>{
//             return categorsList.find((item)=>item.name===parent.category)
//         }
//     }
// }



// 6. add mutaion iwth input type 

// const typeDefs=`#graphql

// type User{
//     id:ID!
//     name:String!
//     email:String!
//     password:String!
// }
// type Query{
//     user:[User!]!
// }

// type Mutation{
//     addUser(name:String,email:String,password:String):User!
// }
// `

// const userList:{id:number,name:string,email:string,password:string}[]=[
//     {id:1,name:"varun chauhan",email:"vc28022004@gmail.com",password:"Varun@143"}
// ];
// let counterId=2;

// const resolvers={
//     Query:{
//         user:()=>userList!
//     },
//     Mutation:{
//         addUser:(parent:any,args:{name:string,email:string,password:string},ctx:any,info:any)=>{
//             const newUser={
//                 id:counterId++,
//                 name:args.name,
//                 email:args.email,
//                 password:args.password
//             }
//             userList.push(newUser)
//             return newUser
//         }
//     }
// }



// 7. mutation add operation  with input type

const typeDefs = `#graphql

type User{
    id:ID!
    name:String!
    email:String!
    password:String!
}
type Query{
    user:[User!]!
}
input addUserField {
    name:String!
    email:String!
    password:String!
    
}
input deletrUserField {
    id:ID!
}

input updateUserField{
    id:ID!
    name:String
    email:String
    password:String
}
type Mutation{
    addUser(input:addUserField):User!
    deleteUser(input:deletrUserField):User!
    updateUser(input:updateUserField):User!
}
`

const userList: { id: number, name: string, email: string, password: string }[] = [
    { id: 1, name: "varun chauhan", email: "vc28022004@gmail.com", password: "Varun@143" }
];
let counterId = 2;

const resolvers = {
    Query: {
        user: () => userList!
    },
    Mutation: {
        addUser: (parent: any, args: { input: { name: string, email: string, password: string } }, ctx: any, info: any) => {
            const { name, email, password } = args.input
            const newUser = {
                id: counterId++,
                name: name,
                email: email,
                password: password
            }
            userList.push(newUser)
            return newUser
        },

        deleteUser: (parent: any, args: { input: { id: number } }, ctx: any, info: any) => {
            const user = userList.findIndex((user) => String(user.id) === String(args.input.id))

            const deletUser = userList[user]

            userList.splice(user, 1);
            return deletUser;
        },
        updateUser: (parent: any, args: {input: {id: number, name: string, email: string, password: any}}, ctx: any, info: any)=>{
            const user=userList.find((us)=>String(us.id)===String(args.input.id))
            if(!user){
                throw new Error("user not found");

            }
            const user2=user
            Object.assign(user,args.input)

            return user2
        }
    }
}

const apollo_server = new ApolloServer(
    {
        typeDefs,
        resolvers
    }
)
const { url } = await startStandaloneServer(apollo_server, { listen: { port: 5000 } })

console.log("Listening url at ", url)