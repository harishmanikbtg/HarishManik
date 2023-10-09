// let http = require('http');
// let fs = require('fs');

// let server = http.createServer(function(req, res) {
//     let url = req.url
//     if(url.split("/")[1] === "public"){
//         handlePublic(url, req, res);
//     }else{
//         let html = fs.readFileSync("./index.html");
//         res.setHeader("Content-Type", "text/html");
//         res.statusCode = 200;
//         res.end(html);
//     }

    
// });

// function handlePublic(url, req, res){
//     let file = fs.readFileSync("./" + url)
//     res.end(file);
// }

// server.listen(3000);

const sendMail = (mail)=>{
    fetch('/send', {
        method: 'post',
        body: mail,
    }).then((response) => {
        return response.json();
    });
};


const form = document.getElementById("contact-form");

const formEvent = form.addEventListener("submit", (event) => {
    event.preventDefault();

    let mail = new FormData(form);

    sendMail(mail);
})