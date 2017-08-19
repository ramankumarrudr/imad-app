//<sowtwear packages>
var express = require('express');//to ceate webserver
var morgan = require('morgan');//to help us output logs of the server
var path = require('path');
//</sowtwear packages>

var app = express();
app.use(morgan('combined'));
var articleOne= {
    title:'Article-One',
    heading:'Article-One',
    date: 'aug 19,2017',
    head1: 'SSl',
    content:` <p>
        Transport Layer Security (TLS) and its predecessor, Secure Sockets Layer (SSL), both frequently referred to as "SSL", are cryptographic protocols that provide communications security over a computer network.[1] Several versions of the protocols find widespread use in applications such as web browsing, email, Internet faxing, instant messaging, and voice-over-IP (VoIP). Websites are able to use TLS to secure all communications between their servers and web browsers.
        </p>`
};
function createTemplate (data){
    
    var title = data.title;
    var date = data.date;
    var head1 = data.head1;
    var heading=data.heading;
    var content=data.content;

var htmlTemplate = `<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="/ui/style.css" rel="stylesheet">
    </head>
    
    <body>
        <div class="container">
        <a href="/">Home</a>
        <hr/>
        <h3>${heading}</h3>
        <div>
        ${date}
        </div>
            <h4>${head1}</h4>
       ${content}
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/article-one',function(req,res){
    res.send(createTemplate(articleOne));
});

app.get('/article-two',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-two.html'));
});
app.get('/article-three',function(req,res){
    res.sendFile(path.join(__dirname,'ui','article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
