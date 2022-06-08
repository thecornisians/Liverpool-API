const express =  require('express')
const { sendfile } = require('express/lib/response')
const path = require('path')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3000

app.use(cors())
app.use('/images', express.static(__dirname +'/images'));  

//object with all the liverpool player from the 2021 football season
const squad = {
    //goalkeepers
    'alisson' :{
        // 'Picture': 
        'name' : 'Alisson Becker',
        // 'image' : 'https://ibb.co/3fDx2Xq',
        'shirt number': 1,
        'nationality': 'Brazil',
        'appearances' : 36,
        'clean sheets' : 20,
        'goals' : 0
    },
    'adrian': {
        'name' : "Adrian",
        // 'image' : 'https://ibb.co/d4bS5B9',
        'shirt number': 13,
        'nationality': 'Spain',
        'appearances': 0,
        'clean sheets' : 0,
        'goals': 0
    },
    'caoimhin kellerher':{
        'name' : 'caoimhin Kelleher',
        'shirt number': 62,
        'nationality': "Ireland",
        'appearances' : 2,
        'clean sheets' : 1,
        'goals': 0
    },
    'virgil van dijk':{
        'name' : 'Virgil Van Dijk',
        'shirt number': 4,
        'nationality': "Netherlands",
        'appearances' : 34,
        'clean sheets' : 21,
        'goals': 3
    },
    'joseph gomez':{
        'name' : 'Joseph Gomez',
        'shirt number': 12,
        'nationality': "England",
        'appearances' : 8,
        'clean sheets' : 2,
        'goals': 0
    },
    'konstantinos tsimikas':{
        'name' : 'Konstantinos Tsimikas',
        'shirt number': 21,
        'nationality': "Greece",
        'appearances' : 13,
        'clean sheets' : 3,
        'goals': 0
    },
    'andrew robertson':{
        'name' : 'Andrew Robertson',
        'shirt number': 26,
        'nationality': "Scotland",
        'appearances' : 29,
        'clean sheets' : 16,
        'goals': 3
    },
    'joel matip':{
        'name' : 'Joel Matip',
        'shirt number': 32,
        'nationality': "Cameroon",
        'appearances' : 31,
        'clean sheets' : 17,
        'goals': 3
    },
    'trent alexander-arnold':{
        'name' : 'Trent Alexander-Arnold',
        'shirt number': 66,
        'nationality': "England",
        'appearances' : 32,
        'clean sheets' : 17,
        'goals': 2
    },
    'ibrahima konate':{
        'name' : 'Ibrahima Konate',
        'shirt number': 5,
        'nationality': "France",
        'appearances' : 11,
        'clean sheets' : 4,
        'goals': 2
    }, 
    'fabinho':{
        'name' : 'Fabinho',
        'shirt number': 3,
        'nationality': "Brazil",
        'appearances' : 29,
        'assists' : 1,
        'goals': 5
    }, 
    'thiago':{
        'name' : 'Thiago',
        'shirt number': 6,
        'nationality': "Spain",
        'appearances' : 25,
        'assists' : 4,
        'goals': 1
    }, 
    'james milner':{
        'name' : 'James Milner',
        'shirt number': 7,
        'nationality': "England",
        'appearances' : 24,
        'assists' : 1,
        'goals': 0
    },
     
    'naby keita':{
        'name' : 'Naby Keita',
        'shirt number': 8,
        'nationality': "Guinea",
        'appearances' : 23,
        'assists' : 1,
        'goals': 3
    },
     
    'jordan henderson':{
        'name' : 'Jordan Henderson',
        'shirt number': 14,
        'nationality': "England",
        'appearances' : 35,
        'assists' : 5,
        'goals': 2
    },
     
    'alex oxlade-chamberlain':{
        'name' : 'Alex Oxlade-Chamberlain',
        'shirt number': 15,
        'nationality': "England",
        'appearances' : 17,
        'assists' : 1,
        'goals': 2
    },
     
    'curtis jones':{
        'name' : 'Curtis Jones',
        'shirt number': 17,
        'nationality': "England",
        'appearances' : 15,
        'assists' : 1,
        'goals': 1
    },
     
    'harvey elliot':{
        'name' : 'Harvey Elliot',
        'shirt number': 67,
        'nationality': "England",
        'appearances' : 6,
        'assists' : 0,
        'goals': 0
    },
     
    'tyler morton':{
        'name' : 'Tyler Morton',
        'shirt number': 80,
        'nationality': "England",
        'appearances' : 2,
        'assists' : 0,
        'goals': 0
    },
     
    'firmino':{
        'name' : 'Firmino',
        'shirt number': 9,
        'nationality': "Brazil",
        'appearances' : 20,
        'assists' : 4,
        'goals': 5
    },
     
    'sadio mane':{
        'name' : 'Sadio Mane',
        'shirt number': 10,
        'nationality': "Senegal",
        'appearances' : 34,
        'assists' : 2,
        'goals': 16
    },
     
    'mohammed salah':{
        'name' : 'Mohammed Salah',
        'shirt number': 11,
        'nationality': "Egypt",
        'appearances' : 35,
        'assists' : 13,
        'goals': 23
    },
     
    'diogo jota':{
        'name' : 'Diogo Jota',
        'shirt number': 20,
        'nationality': "Portugal",
        'appearances' : 35,
        'assists' : 4,
        'goals': 15
    },
     
    'divock origi':{
        'name' : 'Divock Origi',
        'shirt number': 27,
        'nationality': "Belgium",
        'appearances' : 7,
        'assists' : 0,
        'goals': 3
    },
     
    'takumi minamino':{
        'name' : 'Takumi Minamino',
        'shirt number': 18,
        'nationality': "Japan",
        'appearances' : 11,
        'assists' : 0,
        'goals': 3
    },
     
    'kaide gordon':{
        'name' : 'Kaide Gordon',
        'shirt number': 49,
        'nationality': "England",
        'appearances' : 1,
        'assists' : 0,
        'goals': 0
    },
     
    'luiz diaz':{
        'name' : 'Luiz Diaz',
        'shirt number': 23,
        'nationality': "Colombia",
        'appearances' : 13,
        'assists' : 3,
        'goals': 4
    },
    'unknown':{
        'name' : 'unknown',
        'shirt number': 'unknown',
        'nationality': "unknown",
        'appearances' : 'unknown',
        'assists' : 'unknown',
        'goals': 'unknown'
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

  app.get('/js/main.js', (req,res)=>{
    res.sendFile(__dirname + '/js/main.js')
  })

  app.get('/images', (res,req) =>{
      res.sendFile(__dirname + '/images')
  })
  

app.get('/squad/:name', (req,res)=>{
    console.log(res.json)
    const playerName = req.params.name.toLowerCase()
    if(squad[playerName]){
        res.json(squad[playerName])
    }else if([squad].includes(req)){
        res.json(squad[playerName])
    }
    else{
        res.json(squad['unknown'])
    }
    
})


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})

