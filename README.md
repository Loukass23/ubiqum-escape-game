The escape room consist of a series of logic puzzle around the world of coding (no actual coding skills required!)

Ottavia Feletig and Lucas Dupias deigned this small game for the Berlin office opening event on May 23rd 2019.

Rules:
Teams of 2 or 3 persons have to find answers to logic questions through the interface of a custom made web app.

The app give them description of puzzles and awaits an answer to input. Meanwhile, their time is being recorded. 

The are 2 types of puzzles: 

Puzzle of logic reasoning
Puzzle where participants have to find clues around them in the room 


Web App:
It is a small React web app to display puzzle description and handle participants answers. Find example deployed at:

https://ubiqum-escape-room.web.app/

The main puzzles are being rendered from a configuration file (see bottom section)   with the following props :

title (required)
description (required)
img (image URL optional)
solution (required, answer of the puzzle, can be an arry of solutions) 
res (placeholder for the solution input)


Note that the opening and end puzzles are hard coded (not read from the configuration file:

Opening puzzle require a 8 characters password. Answer is a list of the most common 8 character passwords, i.e "password" , "12345678" , "iloveyou" ...
Ending puzzle require you to convert the time spent on the escape game from seconds to HH:MM:SS format. Note that if game goes over 1h it is considered lost.
Scoreboard


At the end of last puzzle, the time to solve is push to a firebase database at a leaderboard is displayed with all the result in firebase 

Make your own Escape room
open terminal
clone git repo: git clone https://github.com/Loukass23/ubiqum-escape-game.git
change directory into the folder : cd ubiqum-escape-game
install dependencies : npm install
run dev server: npm start
Firebase congif file is not made public: 
set up a new firebase project with your account
create a file firebaseConfig.js in src/config/firebaseConfig.js
 paste this content: 
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
// to replace with your firebase config
const firebaseConfig = {
apiKey: "********************************",
authDomain: "***********************************",
databaseURL: "********************************",
projectId: "********************************",
storageBucket: "********************************",
messagingSenderId: "********************************",
appId: "********************************"
};
firebase.initializeApp(firebaseConfig);


export default firebase;
Edit file src/config/puzzlesUbiqum.js to create your own fun puzzles!
Have fun with it! 
Share your puzzles!
Give feedback
This project was developed in a hurry and therefore contains several issues.

You are welcome to report them on GitHub or create pull requests. 

Contact Ottavia and Lucas if you need any help!










Puzzles configuration file  for the deployed example:
export const puzzles =
{
1: {
title: "Binary Error",
description: "Our attack encoutered a date security check. You need to enter today's day (23) to unlock the system. Be careful, it needs to be converted into a binary number to be understood by the server. Below is an example of the binary number 13 to help you. Good luck!",
solution: ["10111"],
img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1558098970/Binary.jpg",
res: 'Binary number'
},
2: {
title: "Database URL",
description: "Ok we are in the system now, let's find the classified documents to steal. For security purposes the adress of the database is not save in the computer. But I am sure that the employees must have written it down somewhere to remember it. Maybe look for where they store important documents.",
solution: ["localhost:8080"],
res: "Database URL"

},
3: {
title: "Cypher",
description: "Data is retrieved! Oh wait... it is crypted. We need to find the cypher encription key to decode the data. ",
solution: ["ottavia and lucas are the best mentor ever"],
img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1558551259/cypher.jpg",
res: "decripted data"
},
4: {
title: "Attack",
description: "We have the data, let's mess up the system now. Finish writing this attack. You need to change 2 variables values to complete the code",
solution: ["iamlocked = true, ubiqumisgreat = true", "ubiqumisgreat = true, iamlocked = true"],
res: "[variable 1 name] = [variable 1 value], [variable 2 name] = [variable 2 value]",
img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1558551258/function.jpg"
},
5: {
title: "Log out",
description: "Time to erase our presence from the log and get out of here. To do so you just you just need to convert the amont of time you spent hacking below from second to a human readable format mm:ss ",
solution: ["test"],
res: "HH:mm:ss",
last: "true"
},

}

