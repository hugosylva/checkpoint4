const express = require('express')
const app = express()
const mysql = require('mysql')
const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")
const Joi = require ('joi');

const db = mysql.createPool({
    user: "root",
    host: "localhost",
    password: "Pandeiretas0212",
    database: "hs_portfolio"
});

require("dotenv").config()




app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());



const corsOptions = {
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT"],
    credentials: true,
    optionSuccessStatus: 200,
  };
  
  app.use(cors(corsOptions));
//   const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({extended: true}))

app.post('/register', (req, res) => {

    const username = req.body.username
    const password = req.body.password


    db.query(
    "INSERT INTO users (username, password) VALUES (?,?)", 
    [username, password],
    (err, result) => {
        console.log(err);
    });
});

app.post ('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password


    db.query(
    "SELECT * FROM users WHERE username = ? AND password = ?", 
    [username, password],
    (err, result) => {
       if (err) {
           res.send({err: err});
       }
        if (result) {
             res.send(resut)
         } else {
             res.send({message: "Wrong Username and/or Password"})
         }
       }
    );

})


// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname,'static','index.html'));
// });

// app.post('/',(req,res)=>{
//     console.log(req.body);
//     const schema = Joi.object().keys({
//         email : Joi.string().trim().email().required(),
//         password: Joi.string().min(5).max(10).required()
//     });
//     Joi.validate(req.body,schema,(err,result)=>{
//         if(err){
//             console.log(err);
//             res.send('an error has occurred');
//         }
//         else{
//             console.log(result);
//             res.send('successfully posted data');
//         }
        
//     })
    
// });


app.post("/api/insert",(req, res) => { 

    const workName = req.body.workName
    const workReview = req.body.workReview

    const sqlInsert = 
    "INSERT INTO work_feedback (workName. workReview) VALUES (?,?)"
    db.query(sqlInsert, [workName, workReview], (err, result) => {
        console.log(result)
    })

});

app.get("/api", (req, res) => {
    res.json({"jobTypes": ["Radio", "Commercials", "Events"] })
})


app.post("/send_mail", cors(), async (req, res) => {
    let{text} = req.body
    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth:{
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS
    }
    })
await transport.sendMail({
    form: process.env.MAIL_FROM,
    to: "test@test.com",
    subject: "test mail",
    html: 
    `
    
    <div className = "email" style="border:2px solid black; font-family: sans-serif; font-size 15px;"> 
    <h2>Here's your email</h2>
    <p> ${text}  </p>

    <p>Best regards, Hugo </p>

    </div>
    `
})





})

app.listen(5000, () => {console.log("Server running on PORT 5000") })
