import path from "path"

const address="D:/fullstck/myfoldr/urfolder/ak.txt"

console.log(path.basename(address))
console.log(path.basename(address,".txt"))
console.log(path.dirname(address))
console.log(path.parse(address))
console.log(path.extname(address))

console.log(path.normalize(address))