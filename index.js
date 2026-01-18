const http = require('http');
const calculate = require('./calculate');
const server = http.createServer((req,res)=>{
    if(req.method === 'GET' && req.url.startsWith('/calculate')){
        const url = new URL(req.url, `http://${req.headers.host}`);
        const a = parseFloat(url.searchParams.get('a'));
        const b = parseFloat(url.searchParams.get('b'));
        const operation = url.searchParams.get('operation');
        if(isNaN(a) || isNaN(b) || !operation){
            res.writeHead(400, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({error: 'Invalid parameters'}));
            return;
        }
        try{
            const result = calculate(a,b,operation);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({result}));
        }catch(error){
            res.writeHead(400,{'content-type':'application/json'});
            res.end(JSON.stringify({error: error.message}));


        }
    }else{res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not Found'}));
    }

//Already running on port 3000

});
server.listen(3000,()=>{
    console.log('Server is listening on port 3000.')
})
 module.exports=server;