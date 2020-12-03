const express = require("express");
const app = express();

const data = require("./public/data")

const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname + "/public"));

var hbs = require('express-handlebars')
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'layout',
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs')



app.get('/',(req,res)=>{
    res.locals.title = "Jeopardize Contest"
	res.render('index')
})

app.get('/task1',(req,res)=>{
    res.locals.title = "Jars Saving"

    
    var sal = req.query.salary;
  
    var salary = {
        play: sal*0.1,      //10
        long_term:sal*0.1,  //10
        edu: sal*0.1,      //10
        give: sal*0.05,   //5
        finan: sal*0.1,  //10
        necess: sal*0.55 //55
    }

	res.render('task1', salary)
})

app.get('/task2',(req,res)=>{
    res.locals.title = "Inspiring Quotes"
	res.render('task2')
})

app.get('/task3',(req,res)=>{
    res.locals.title = "TV Sales"
	res.render('task3')
})

app.get('/task4',(req,res)=>{
    res.locals.title = "Zodiac Characteristics"
	res.render('task4')
})

app.get('/task4-details',(req,res)=>{
    res.locals.title = "Zodiac Characteristics"
    res.locals.name = data.zodiacs[4]['name']
    res.locals.imagePath = '/images' + data.zodiacs[4]['imagePath']
    res.locals.dates = data.zodiacs[4]['dates']
    res.locals.strengths = data.zodiacs[4]['strengths']
    res.locals.weaknesses = data.zodiacs[4]['weaknesses']
    res.locals.likes = data.zodiacs[4]['likes']
    res.locals.dislikes = data.zodiacs[4]['dislikes']
    res.locals.description = data.zodiacs[4]['description']
	res.render('task4-details')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));