import http from "http";
import fs from "fs";

const server =http.createServer((req,res)=>{
    if(req.url==="/"){
        res.writeHead(202,"Good",{"content-type":"text/html"})
        fs.readFile("8.RoutingnotExpress/Public/home.html",(err,data)=>{
            err?console.log(err):res.end(data);
        })
    }
    else if(req.url==="/about"){
        res.writeHead(202,"Good",{"content-type":"text/html"})
        fs.readFile("8.RoutingnotExpress/Public/about.html",(error,data)=>{
            error?console.log(error):res.end(data);
        })
    }
    else{
        res.writeHead(404,"Bad",{"content-type":"text/html"})
        res.end("<h1 style='color:blue; text-align:center;'>Page Not Found</h1>")
    }

});

server.listen(8000,()=>console.log("server up at localhost 800"))