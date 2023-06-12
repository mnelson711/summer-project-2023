const express = require("express");
const app = express();
const mysql = require("mysql");



const db = mysql.createConnection({
    user: 'doadmin',
    password: 'AVNS_ScmoB1Kr9TtZ8e4UbcW',
    host: 'db-mysql-nyc1-14138-spectrum-do-user-14136635-0.b.db.ondigitalocean.com',
    port: '25060',
    database: 'spectrum',
    sslmode: 'REQUIRED',
});

function selectByUserID(userID) {//grab a users info by their ID
    db.query(
        "SELECT * FROM users WHERE userID = ?",
        userID,
        (err, res) => {
            if (err) {
                console.log(err);
            } else  {
                res.send(result);
            }
        }
    )
    console.log("select user by ID ran");
}

function selectByUsername(username, req, res) {//grab a users info by their ID
    db.query(
        "SELECT * FROM users WHERE Username = ?",
        username,
        (err, res) => {
            if (err) {
                console.log(err);
            } else  {
                res.send(result);
                console.log(result);
            }
        }
    );
    console.log("select user by username ran");
}

function insertUser(user) {//this will insert a user into the database
    const FirstName = user.FirstName;
    const LastName = user.LastName;
    const Username = user.Username;
    const Email = user.Email;
    const Pronoun = user.Pronoun;
    const DOB = user.DOB;
    const Password = user.Password;
    db.query(
        "INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password) VALUES (?,?,?,?,?,?,?)",
        [FirstName, LastName, Username, Email, Pronoun, DOB, Password, 'img.png'],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
    console.log("insert: ", user, "ran");
}

function deleteUser(username) { //this function will delete a user based on username
    db.query("DELETE FROM users WHERE username = ?", username, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    console.log("delete function ran");
}

function changeUser(user,userid) {
    var FirstName = user.FirstName;
    var LastName = user.LastName;
    var Username = user.Username;
    var Pronoun = user.Pronoun;
    db.query(
        "UPDATE users SET FirstName = ?, LastName = ?, Username = ?, Pronoun = ? WHERE userid = ?",
        [FirstName, LastName, Username, Pronoun, userid],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
    console.log("update user function ran");
}

function changePassword(newpass, userID) {
    db.query(
        "UPDATE users SET Password = ? WHERE userid = ?",
        [newpass, userID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log("password successfully changes");
            }
        }
    )
}
module.exports = {
    selectByUsername,
    selectByUserID,
    insertUser,
    deleteUser,
    changeUser,
    changePassword,
};