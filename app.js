const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000 ;

var app = express() ;

app.use(express.static('public'))
app.use(express.static(__dirname + '/views'));

app.get( '/' , (req , res) => {
    //console.log(JSON.stringify(req.headers , undefined , 2));
    res.send("OK")
});

app.get( '/api/whoami' , (req , res) => {
    console.log("req");

    res.json({
        "ipaddress" : req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||  req.connection.socket.remoteAddress ,
        "language"  : req.headers['accept-language'].split(',')[0] ,
        "sorftware" : req.headers['user-agent'].split('(')[1].split(')')[0]
    });

});



app.listen( port , () => {
    console.log(`Server is up on port ${port}!`);
});
