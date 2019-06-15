var express = require('express');
var app = express();

app.set('view engine','ejs');

app.use(express.static('public'));


app.get('/',function(req,res){
    res.render('index');
});
app.get('/contact',function(req,res){
    res.render('contact');
});

app.get('/profile/:name',function(req,res){
    var data = {age:23,job:'lol',hobbies:['art','craft']};
    res.render('profile',{person:req.params.name,data:data});
});
app.listen(3000);

























/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
console.log('request was made'+ req.url);
if(req.url === '/home'|| req.url === '/'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
}else if(req.url === '/contact'){
    res.writeHead(200,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
}else if(req.url === '/api/ninjass'){
    var ninja = [ {name:'kanika', age:'23'},{name:'klola', age:'25'}];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(ninja));
}else{
    res.writeHead(404,{'Content-Type':'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
}


 
});

server.listen(3000,'127.0.0.1');
console.log('yo dawgs,now listening to port 3000');

*/