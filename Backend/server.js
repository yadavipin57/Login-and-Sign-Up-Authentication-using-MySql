require('dotenv').config()

const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express()
app.use(express.json())
app.use(cors())


const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
})

// For testing
app.get('/', (req, res) => {
    return res.json("From Backend")
})

// AddUser
app.post('/addUser', (req, res) => {
    const sql = 'INSERT INTO signup (name, email, password, isUser) VALUES (?)'
    const values = [
        req.body.name,
        req.body.email,
        req.body.password,
        req.body.isUser
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})

// get user
app.get('/users', (req, res) => {
    const sql = "SELECT * FROM signup"
    db.query(sql, (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


// Update isUser
app.put('/isUser', (req, res) => {
    const sql = 'UPDATE signup set isUser = ? WHERE id = ?'
    const values = [
        req.body.isUser
    ]
    db.query(sql, [values, req.body.id], (err, data) => {
        if (err) return res.json(err)
        return res.json(data)
    })
})


app.listen(process.env.PORT, () => {
    console.log(`Listening on port number ${process.env.PORT}`);
})