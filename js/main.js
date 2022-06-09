document.querySelector('#submit').addEventListener('click',addToDom)


const playerImage = document.getElementById('player-image')
const playerName = document.getElementById('player-name')
const shirtNumber = document.getElementById('shirt-name')
const nationality = document.getElementById('nationality')
const appearances = document.getElementById('appearances')
const assist = document.getElementById('assist')
const goals = document.getElementById('goals')


// async function addToDom(){
//     try{
//         const getPlayer = document.querySelector('#playerName').value
//         const res = await fetch(`https://liverpool-app.herokuapp.com/squad/${getPlayer}`) 
//         const data =  await res.json()
//         playerName.innerHTML = data.name
//         // playerImage.innerHTML = data.image
//         shirtNumber.innerHTML = data['shirt number']
//         nationality.innerHTML = data.nationality
//         appearances.innerHTML = data.appearances
//         assist.innerHTML = data.assists
//         goals.innerHTML = data.goals
//     }
//     catch(error){
//         console.log(error)
//     }
        
//     }


function addToDom(){
    const getPlayer = document.querySelector('#playerName').value

    fetch(`https://liverpool-app.herokuapp.com/squad/${getPlayer}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        playerName.innerHTML = `Player name: ${data.name}`
        // playerImage.innerHTML = data.image
        // shirtNumber.innerHTML = `Shirt Number: ${data['shirt number']}`
        nationality.innerHTML = `Nationality: ${data.nationality}`
        appearances.innerHTML = `Appearances: ${data.appearances}`
        assist.innerHTML = `Assists: ${data.assists}`
        goals.innerHTML = `Goals: ${data.goals}`
    })
    .catch(error => console.log(error))
}
