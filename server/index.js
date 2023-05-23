const express = require("express");
const app = express();
const mysql = require("mysql");
// const cors = require("cors");
const { createHash } = require('crypto');


// app.use(cors());
app.use(express.json());

var db = mysql.createConnection({
    user: 'doadmin',
    password: 'AVNS_ScmoB1Kr9TtZ8e4UbcW',
    host: 'db-mysql-nyc1-14138-spectrum-do-user-14136635-0.b.db.ondigitalocean.com',
    port: '25060',
    database: 'spectrum',
    sslmode: 'REQUIRED',
});

app.post("/signup", (req, res) => {
    const FirstName = req.body.firstname;
    const LastName = req.body.lastname;
    const Username = req.body.Username;
    const Email = req.body.Email;
    const Pronoun = req.body.Pronoun;
    const DOB = req.body.dob;
    const Password = req.body.Password;
    const confirmPassword = req.body.confirmpassword;
    if (Password != confirmPassword) {
        res.send("Password and Confirm Password do not match");
    }
    Password = hash(Password);

    db.query(
        "INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password) VALUES (?,?,?,?,?,?)",
        [FirstName, LastName, Username, Email, Pronoun, DOB, Password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
});

app.get("/", (req, res) => {
    // db.query("INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password) VALUES ('Ryan', 'Barry', 'Rybeardawg', 'rbarry@gmail.com', 'He/Him', '2002-01-16', 'Password');", (err, result) => {
    // db.query("DELETE FROM users WHERE UserID = 4;", (err, result) => {
    db.query("SELECT FROM users WHERE UserID = 2;", (err, result) => {

        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.put("/update", (req, res) => {
    if (req.body.firstname != null) {
        const FirstName = req.body.firstname;
    }
    if (req.body.lastname != null) {
        const LastName = req.body.lastname;
    }
    if (req.body.Username != null) {
        const Username = req.body.Username;
    }
    if (req.body.Pronoun != null) {
        const Pronoun = req.body.Pronoun;
    }

    db.query(
        "UPDATE users SET FirstName = ?, LastName = ?, Username = ?, Pronoun = ? WHERE userid = ?",
        [FirstName, LastName, Username, Pronoun],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
});

app.delete("/delete/:userid", (req, res) => {
    const userid = req.params.userid;
    db.query("DELETE FROM users WHERE userid = ?", userid, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
    console.log("On port 3001");
});


function hash(string) {
    return createHash('sha256').update(string).digest('hex');
}