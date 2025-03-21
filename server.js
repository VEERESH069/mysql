const express = require('express');
const app = express();
const port = 3000;
const mysql = require('mysql2');

const con=mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,        
password: process.env.DB_PASS,
database: process.env.DB_NAME
});

const connection=async ()=>{    
    con.connect((err)=>{
        if(err){
        console.log('Error connecting to Db');
        return;
        }
        console.log('Connection established');
        return con
    });
    }
 const endconnect=async()=>{
    con.end((err)=>{
        if(err){
        console.log('Error connecting to Db');
        return;
        }
        console.log('Connection ended');
    });
    }




app.listen(port,async () => {
    await connection();
    console.log('Connected to database');
    await endconnect();
    
  console.log(`Server is running on port ${port}`);
});