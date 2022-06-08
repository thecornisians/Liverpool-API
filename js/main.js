document.querySelector('submit').addEventListener('click' , addToDom)
const value = document.querySelector('input').value

const playerImage = document.querySelector('player-image')
const playerName = document.querySelector('player-name')
const shirtNumber = document.querySelector('shirt-name')
const nationality = document.querySelector('nationality')
const assist = document.querySelector('assist')
const goals = document.querySelector('goals')


async function addToDom (){
    try{
        const res = await fetch(`https://liverpool-app.herokuapp.com/squad/${value}`)
        const data =  await res.json()
        playerName.innerHTML = data.name
        // playerImage.innerHTML = data.image
        shirtNumber.innerHTML = data['shirt number']
        nationality.innerHTML = data.nationality
        assist.innerHTML = data.assists
        goals.innerHTML = data.goals
    }

    catch(error){
        console.log(error)
    }
        
    }
