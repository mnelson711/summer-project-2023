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

// function selectUser(userID) {//grab a user

// }

function insertUser(user) {//this will insert a user into the database
    db.query(
        "INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password) VALUES (?,?,?,?,?,?,?)",
        ["molly", "nelson", "mnelson", "mollyynelson@gmail.com", "she/her", "2002-06-11", "123", 'img.png'],
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
module.exports = {
    //selectUser,
    insertUser,
    deleteUser,
    changeUser
};