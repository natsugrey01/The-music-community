const express = require('express');
const app = express();
const path = require('path');
const mongoose= require('mongoose');
const hbs= require('hbs');
let m;

// connecting with the mongo db
require('./public/connect');
const Register=require('./public/mongoose/register');


// setting up the static path

const static= path.join(__dirname,'./public');
app.use(express.static(static));

// setting up the template path

const tpath= path.join(__dirname,'./template/views');
app.set('view-engine','hbs');
app.set('views',tpath);

// setting up the partial path

const partialPath=path.join(__dirname,'./template/partials');
hbs.registerPartials(partialPath);

// setting the data

app.use(express.json());
app.use(express.urlencoded({extended:false}));

// setting up the routing part

app.get('/',(req,res)=>
{
    
    res.render('index.hbs');
})

app.get('/first',(req,res)=>
{
     res.render('firsttimelogin.hbs');
})

app.get('/profile1',(req,res)=>
{
    console.log("hello");
    res.render('profile.hbs');
})

app.get('/login',(req,res)=>
{
    res.render('login.hbs');
})


app.get('/Harry_Styles',(req,res)=>
{
    res.render('Artists/Harry_Styles.hbs');
})


app.get('/The_Weekend',(req,res)=>
{
    res.render('Artists/The_Weekend.hbs');
})


app.get('/21_Savage',(req,res)=>
{
    res.render('Artists/21_Savage.hbs');
})


app.get('/Drake',(req,res)=>
{
    res.render('Artists/Drake.hbs');
})


app.get('/The_1975',(req,res)=>
{
    res.render('Artists/The_1975.hbs');
})

app.get('/Justin',(req,res)=>
{
    res.render('Artists/Justin_Bieber.hbs');
})

app.get('/Diljit_Dosanjh',(req,res)=>
{
    res.render('Artists/Diljit_Dosanjh.hbs');
})

app.get('/Shubh',(req,res)=>
{
    res.render('Artists/Shubh.hbs');
})
app.get('/Karan_Aujla',(req,res)=>
{
    res.render('Artists/Karan_Aujla.hbs');
})
app.get('/MC_Stan',(req,res)=>
{
    res.render('Artists/MC_Stan.hbs');
})

app.get('/Badshah',(req,res)=>
{
    res.render('Artists/Badshah.hbs');
})
app.get('/Ap_Dhillon',(req,res)=>
{
    res.render('Artists/Ap_Dhillon.hbs');
})
app.get('/Charlie_Puth',(req,res)=>
{
    res.render('Artists/Charlie_Puth.hbs');
})
app.get('/King',(req,res)=>
{
    res.render('Artists/King.hbs');
})

app.get('/Kr$na',(req,res)=>
{
    res.render('Artists/Kr$na.hbs');
})
app.get('/Seedhe_Maut',(req,res)=>
{
    res.render('Artists/Seedhe_Maut.hbs');
})
app.get('/SidhuMoose_Wala',(req,res)=>
{
    res.render('Artists/SidhuMoose_Wala.hbs');
})
app.get('/Liam_Payne',(req,res)=>
{
    res.render('Artists/Liam_Payne.hbs');
})

app.get('/Zayn',(req,res)=>
{
    res.render('Artists/Zayn.hbs');
})


app.get('/One_Direction',(req,res)=>
{
    res.render('Artists/One_Direction.hbs');
})





// post operations

app.post('/login',async (req,res)=>
{
    try
    {
   
        const username=req.body.email;
        const pass= req.body.password;
        const result= await Register.findOne({Password:pass});
        
    

        if(result.email===username)
        {
            console.log('sign in successfully finished!!');
            res.render('index.hbs',{sign : 'Username or password is filled correctly'});
        }
        else
        {
            console.log('sign in is not successfully finished');
            res.render('login.hbs',{sign : 'Username or password is filled incorrectly'});
        }
        
    }
    catch(err)
    {
        res.render('login.hbs',{sign : 'Username or password is filled incorrectly'});
        console.log(err);
    }
})

app.post('/register',async (req,res)=>
{
    const name= req.body.full;
    const email=req.body.email;
    const pass=req.body.password;
    const curr=req.body.current;


    if(curr===pass)
    {
        try
        {
        const data= await new Register(
            {
                name:name,
                email:email,
                Password:pass,
                Confirm:curr
            }
        );

        const result= await data.save();
        m=email;
        console.log(result);
        }
        catch(err)
        {
            console.log(err);
        }
    }

    res.render('firsttimelogin.hbs');

})

app.post('/firsttimelogin',async (req,res)=>
{
    const artists=[];

     artists.push(req.body.artist1);
     artists.push(req.body.artist2);
     artists.push(req.body.artist3);
     artists.push(req.body.artist4);
     artists.push(req.body.artist5);
     artists.push(req.body.artist6);
     artists.push(req.body.artist7);
     artists.push(req.body.artist8);
     artists.push(req.body.artist9);
     artists.push(req.body.artist10);
     artists.push(req.body.artist11);
     artists.push(req.body.artist12);
     artists.push(req.body.artist13);
     artists.push(req.body.artist14);
     artists.push(req.body.artist15);
     artists.push(req.body.artist16);
     artists.push(req.body.artist17);
     artists.push(req.body.artist18);
     artists.push(req.body.artist19);
     artists.push(req.body.artist20);

     console.log(m);
     console.log(artists);
     
     res.render("index.hbs");
});


app.listen(8002,()=>
{
    console.log('server created');
});