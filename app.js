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

app.get('/task4-details', (req, res) => {
    let zodiac = parseInt(req.query.zodiac.valueOf())
    res.locals.title = data.zodiacs[zodiac]['name'] + " Characteristics"
    res.locals.name = data.zodiacs[zodiac]['name']
    res.locals.imagePath = '/images' + data.zodiacs[zodiac]['imagePath']
    res.locals.dates = data.zodiacs[zodiac]['dates']
    res.locals.strengths = data.zodiacs[zodiac]['strengths']
    res.locals.weaknesses = data.zodiacs[zodiac]['weaknesses']
    res.locals.likes = data.zodiacs[zodiac]['likes']
    res.locals.dislikes = data.zodiacs[zodiac]['dislikes']
    res.locals.description = data.zodiacs[zodiac]['description']
	res.render('task4-details')
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));