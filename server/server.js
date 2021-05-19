const express = require('express');
const bodyParser = require('body-parser')
var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');
var config = require('./Config/secret');
var cors = require('cors');
const fetch = require('node-fetch');
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static('static'))
const fs = require('fs');
// const users = require("./users.json");
app.use(cors());
app.post('/api/login', async (req, res) => {
    // console.log("---"+req.body+"---");
    console.log("------------------------------------")
    const email = req.body.email;
    const password = req.body.password;
    console.log("email--" + email);
    console.log("password--" + password);
    let url = "https://jsonblob.com/api/fb31c392-766c-11eb-b94a-33dac042b7f8";

    let settings = { method: "Get" };
console.log(email);
    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            // do something with JSON
            console.log("---------------");
            console.log(json)
            console.log("---------------");
            if(json.length!= 0){
                for (let i = 0; i < json.length; i++) {
                    console.log("email[i]: " + json[i].email)
                    console.log("password[i]: " + json[i].password)
                    console.log("---------------");
                    console.log(email)
                    if (email === json[i].email) {
                        console.log("email if")
                        if (password === json[i].password) {
                            console.log("password if")
                            // res.send("Login Successful");
                            let message = "Login Successful"
                            let token = jwt.sign({ id: email }, config.secret, {
                                expiresIn: 86400 // 24 hours
                            });
                            return res.send({ message: message, token: token });
    
                        }
                        else {
                            let message = "Password is incorrect";
                            return res.send({ message: message });
                        }
                    }
            }}
            
                else {
                    // res.send("Invalid UserName or Password");
                    console.log("else")
                    let message = "email is incorrect"
                    return res.send({ message: message });
                }
            // }
            // res.send(message);
        });
    // res.send(message);
});

app.get('/api/user/:email', (req, res) => {
    let url = "https://jsonblob.com/api/fb31c392-766c-11eb-b94a-33dac042b7f8";

    let settings = { method: "Get" };

    fetch(url, settings)
        .then(res => res.json())
        .then((json) => {
            console.log(json)
            for(let i=0;i<json.length;i++){
                if(json[i].email === req.params.email){
                    return res.send({message:"true",email:json[i].email})
                }
                else{
                    return res.send({message:"no such user found"})
                }
            }
        })
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server on Port ${port}`);
});
