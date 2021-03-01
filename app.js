const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');
const nodemailer = require('nodemailer');
const path = require('path');

const port = process.env.Port || 3000
const app = express();

//view engine

app.engine(
    "handlebars",
    exphbs({
      extname: "handlebars",
      defaultLayout: false,
      layoutsDir: "views"
    })
  );

  app.set('view engine','handlebars');
//app.engine('handlebars',exphbs());


//static folder
app.use('/public',express.static(path.join(__dirname,'public')));


//body parser for Post

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.statusCode = 200;
    res.render('main');
});



app.post('/send',(req,res)=>{
    //console.log(req.body)
    
    var transporter = nodemailer.createTransport({
       service:'gmail',
       auth:{
           user:'erencan616161@gmail.com',
           pass:'5669141oflu'
       }
    });
    
    var mailOptions = {
        from: req.body.email,
        to:'bodurfatih1967@gmail.com',
        subject: req.body.email,
        text: req.body.msg
    }

    transporter.sendMail(mailOptions,function(err,info){
        if(err){
            console.log('error');
        }else{
            console.log('email sent');
            res.render('emailresponse' ,{name:req.body.name});

        }
    })
})


app.listen(port,()=> console.log('server started..'+port));