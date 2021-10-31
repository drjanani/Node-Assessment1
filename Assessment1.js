const http = require('http');
http.createServer(function(req,res)
{
res.write(`Janani : ${new Date()}`);
res.end();
}
).listen(2001);