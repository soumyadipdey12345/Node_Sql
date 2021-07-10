import express from 'express'
import mysql from 'mysql'
const app = express()

const db = mysql.createPool({
    host:'localhost',
    user:'root',
    password:'toor',
    database:'test',
})


function createMovie(data){
    const sqlIns = `INSERT INTO movies (movieName,movieReview) VALUES ('${data.name}','good movie');`
    return db.query(sqlIns)
}

app.use('/',(req,res)=>{

    // error 

    let x = createMovie({
        name: "ABCD"
    })


    

    res.send("hlw")
})




app.listen(9000,()=>{
    console.log("the port is running------");

})
