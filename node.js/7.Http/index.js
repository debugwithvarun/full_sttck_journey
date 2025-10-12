import http from "http"

const myServer=http.createServer((request,response)=>{
        // console.log(request)
        // response.write("<h1>Varun Chauhan </h1>")
        // response.setHeader("content-type","text/html")
        // response.statusCode=404
        // response.statusMessage="not working fix the issue"
        response.writeHead(202,"good",{"content-type":"utf-8"})
        response.end("<h1>Hello end - no loading</h1>")

})

myServer.listen(8000,()=>{
    console.log("Server is Running...")
})

