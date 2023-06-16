const express = require("express");
var app = express();
const mysql = require("mysql");
var cors = require("cors");
const { createHash } = require('crypto');
const userdao = require('./userdao');
const threaddao = require('./threaddao');
const commentdao = require('./commentdao');
const { parse, stringify } = require('flatted');
const { serialize } = require("v8");


app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'doadmin',
    password: 'AVNS_ScmoB1Kr9TtZ8e4UbcW',
    host: 'db-mysql-nyc1-14138-spectrum-do-user-14136635-0.b.db.ondigitalocean.com',
    port: '25060',
    database: 'spectrum',
    sslmode: 'REQUIRED',
});

function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}

app.post("/selectByUserName", (req, res) => {
    const username = req.body.username;
    (db.query("SELECT * FROM users WHERE Username = ?",
        [username],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "None" });
            }
        }
    ));
});

app.post("/selectByUserID", (req, res) => {
    const userID = req.body.userID;
    console.log(userID);
    (db.query("SELECT * FROM users WHERE UserID = ?",
        userID,
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "None" });
            }
        }
    ));
});

app.post("/selectAllUsers", (req, res) => {
    (db.query("SELECT * FROM users",
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "None" });
            }
        }
    ));
});

app.post("/selectByEmail", (req, res) => {
    const email = req.body.email;
    (db.query("SELECT * FROM users WHERE Email = ?",
        [email],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "None" });
            }
        }
    ));
});

app.post('/profile', (req, res) => {
    const userID = req.body.userID;
    const UserName = req.body.username;
    const FirstName = req.body.fname;
    const LastName = req.body.lname;
    const Pronoun = req.body.pronoun;
    db.query("UPDATE users SET Username = ?, FirstName = ?, LastName = ?, Pronoun = ? WHERE userID = ?;",
        [UserName, FirstName, LastName, Pronoun, userID],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            res.send(result);
        }
    );
});

app.post("/signup", (req, res) => {
    const FirstName = req.body.fname;
    const LastName = req.body.lname;
    const Username = req.body.username;
    const DOB = req.body.dob;
    const Email = req.body.email;
    const Pronoun = req.body.pronouns;
    const Password = req.body.password;

    const hashed = hash(Password);

    db.query(
        "INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password) VALUES (?,?,?,?,?,?,?)",
        [FirstName, LastName, Username, Email, Pronoun, DOB, hashed],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result.length > 0) {
                res.send(result);
            } else {
                res.send({ message: "Unsuccessful" });
            }
        }
    );
});

app.post("/login", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query(
        "SELECT * FROM users WHERE Username = ? AND Password = ?",
        [username, password],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            if (result) {
                res.send(result);
            } else {
                res.send({ message: "Incorrect username or password" });
            }

        }
    );
});

app.listen(3001, () => {
    console.log("On port 3001");
});