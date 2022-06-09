# Liverpool API
This API contains information about every single player that made a league appearance for Liverpool football club during the 2021/22 premier league season This information includes name, nationality, appearances, clean sheets (for defensive players & goalkeepers), assist and goals scored.

**Link to project:** [(https://liverpool-app.herokuapp.com/)](https://liverpool-app.herokuapp.com/)

![liverpool-api](https://user-images.githubusercontent.com/84820874/172867997-972f6b78-494f-419f-adc1-df683561079a.gif)


## How It's Made:

**Tech used:** HTML, CSS, JavaScript, Nodejs & Express

This API is built with Node and Express. It returns JSON data when you issue a request to https://liverpool-app.herokuapp.com/squad (return all players in this API) or https://liverpool-app.herokuapp.com/squad/playername (returns data for a specific player). The frontend of the API is built with Vanilla HTML,CSS and Javascript.

## Optimizations
*(optional)*

In the future I'll like to store the data in a database like MongoDB and allow users to not only issues GET requests but also POST requests to add new entries into the Database.

## Lessons Learned:

I learned how to use node and express to build out servers and serve out JSON data in response to GET requests.



