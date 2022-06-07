const express =  require('express')
const { sendfile } = require('express/lib/response')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())

//object with all the liverpool player from the 2021 football season
const squad = {
    //goalkeepers
    'Alisson' :{
        // 'Picture': 
        'Name' : 'Alisson Becker',
        'Shirt Number': 1,
        'Nationality': 'Brazil',
        'Appearances' : 36,
        'Clean Sheets' : 20,
        'Goals' : 0
    },
    'adrian': {
        'Name' : "Adrian",
        'Shirt Number': 13,
        'Nationality': 'Spain',
        'Appearances': 0,
        'Clean Sheets' : 0,
        'Goals': 0
    },
    'Caoimhin Kellerher':{
        'Name' : 'caoimhin Kelleher',
        'Shirt Number': 62,
        'Nationality': "Ireland",
        'Appearances' : 2,
        'Clean Sheets' : 1,
        'Goals': 0
    },
    'Virgil Van Dijk':{
        'Name' : 'Virgil Van Dijk',
        'Shirt Number': 4,
        'Nationality': "Netherlands",
        'Appearances' : 34,
        'Clean Sheets' : 21,
        'Goals': 3
    },
    'Joseph Gomez':{
        'Name' : 'Joseph Gomez',
        'Shirt Number': 12,
        'Nationality': "England",
        'Appearances' : 8,
        'Clean Sheets' : 2,
        'Goals': 0
    },
    'Konstantinos Tsimikas':{
        'Name' : 'Konstantinos Tsimikas',
        'Shirt Number': 21,
        'Nationality': "Greece",
        'Appearances' : 13,
        'Clean Sheets' : 3,
        'Goals': 0
    },
    'Andrew Robertson':{
        'Name' : 'Andrew Robertson',
        'Shirt Number': 26,
        'Nationality': "Scotland",
        'Appearances' : 29,
        'Clean Sheets' : 16,
        'Goals': 3
    },
    'Joel Matip':{
        'Name' : 'Joel Matip',
        'Shirt Number': 32,
        'Nationality': "Cameroon",
        'Appearances' : 31,
        'Clean Sheets' : 17,
        'Goals': 3
    },
    'Trent Alexander-Arnold':{
        'Name' : 'Trent Alexander-Arnold',
        'Shirt Number': 66,
        'Nationality': "England",
        'Appearances' : 32,
        'Clean Sheets' : 17,
        'Goals': 2
    },
    'Ibrahima Konate':{
        'Name' : 'Ibrahima Konate',
        'Shirt Number': 5,
        'Nationality': "France",
        'Appearances' : 11,
        'Clean Sheets' : 4,
        'Goals': 2
    }, 
    'Fabinho':{
        'Name' : 'Fabinho',
        'Shirt Number': 3,
        'Nationality': "Brazil",
        'Appearances' : 29,
        'Assists' : 1,
        'Goals': 5
    }, 
    'Thiago':{
        'Name' : 'Thiago',
        'Shirt Number': 6,
        'Nationality': "Spain",
        'Appearances' : 25,
        'Assists' : 4,
        'Goals': 1
    }, 
    'James Milner':{
        'Name' : 'James Milner',
        'Shirt Number': 7,
        'Nationality': "England",
        'Appearances' : 24,
        'Assists' : 1,
        'Goals': 0
    },
     
    'Naby Keita':{
        'Name' : 'Naby Keita',
        'Shirt Number': 8,
        'Nationality': "Guinea",
        'Appearances' : 23,
        'Assists' : 1,
        'Goals': 3
    },
     
    'Jordan Henderson':{
        'Name' : 'Jordan Henderson',
        'Shirt Number': 14,
        'Nationality': "England",
        'Appearances' : 35,
        'Assists' : 5,
        'Goals': 2
    },
     
    'Alex Oxlade-Chamberlain':{
        'Name' : 'Alex Oxlade-Chamberlain',
        'Shirt Number': 15,
        'Nationality': "England",
        'Appearances' : 17,
        'Assists' : 1,
        'Goals': 2
    },
     
    'Curtis Jones':{
        'Name' : 'Curtis Jones',
        'Shirt Number': 17,
        'Nationality': "England",
        'Appearances' : 15,
        'Assists' : 1,
        'Goals': 1
    },
     
    'Harvey Elliot':{
        'Name' : 'Harvey Elliot',
        'Shirt Number': 67,
        'Nationality': "England",
        'Appearances' : 6,
        'Assists' : 0,
        'Goals': 0
    },
     
    'Tyler Morton':{
        'Name' : 'Tyler Morton',
        'Shirt Number': 80,
        'Nationality': "England",
        'Appearances' : 2,
        'Assists' : 0,
        'Goals': 0
    },
     
    'Firmino':{
        'Name' : 'Firmino',
        'Shirt Number': 9,
        'Nationality': "Brazil",
        'Appearances' : 20,
        'Assists' : 4,
        'Goals': 5
    },
     
    'Sadio Mane':{
        'Name' : 'Sadio Mane',
        'Shirt Number': 10,
        'Nationality': "Senegal",
        'Appearances' : 34,
        'Assists' : 2,
        'Goals': 16
    },
     
    'Mohammed Salah':{
        'Name' : 'Mohammed Salah',
        'Shirt Number': 11,
        'Nationality': "Egypt",
        'Appearances' : 35,
        'Assists' : 13,
        'Goals': 23
    },
     
    'Diogo Jota':{
        'Name' : 'Diogo Jota',
        'Shirt Number': 20,
        'Nationality': "Portugal",
        'Appearances' : 35,
        'Assists' : 4,
        'Goals': 15
    },
     
    'Divock Origi':{
        'Name' : 'Divock Origi',
        'Shirt Number': 27,
        'Nationality': "Belgium",
        'Appearances' : 7,
        'Assists' : 0,
        'Goals': 3
    },
     
    'Takumi Minamino':{
        'Name' : 'Takumi Minamino',
        'Shirt Number': 18,
        'Nationality': "Japan",
        'Appearances' : 11,
        'Assists' : 0,
        'Goals': 3
    },
     
    'Kaide Gordon':{
        'Name' : 'Kaide Gordon',
        'Shirt Number': 49,
        'Nationality': "England",
        'Appearances' : 1,
        'Assists' : 0,
        'Goals': 0
    },
     
    'Luiz Diaz':{
        'Name' : 'Luiz Diaz',
        'Shirt Number': 23,
        'Nationality': "Colombia",
        'Appearances' : 13,
        'Assists' : 3,
        'Goals': 4
    }
}

app.get('/',(req,res) =>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/squad', (req,res) =>{
    res.json(squad)
})
app.get('/style.css', (req,res)=>{
    res.sendFile(__dirname + '/style.css')
  })

  app.get('/images', (res,req) =>{
      res.sendFile(__dirname + '/images')
  })
  
//   app.get('/js/main.js', (req,res)=>{
//     res.sendFile(__dirname + '/js/main.js')
//   })

app.get('/api/:name', (req,res)=>{
    console.log(res.json)
    const playerName = req.params.name.toLowerCase()
    if(squad[playerName]){
        res.json(squad[playerName])
    }
    
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

