import { URL } from "url";

const myURL=new URL("https://ovinfotech.xyz:9080/pa/gd?query=Varun#hashji")

// console.log(myURL.hash)
// console.log(myURL.host)
// console.log(myURL.hostname)
// console.log(myURL.port)
// console.log(myURL.href)
// console.log(myURL.protocol)
// console.log(myURL.search)
// console.log(myURL.searchParams)
console.log(myURL.toString())
console.log(myURL.toJSON())