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
