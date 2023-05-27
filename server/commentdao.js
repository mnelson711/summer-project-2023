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

function insertComment(comment) {
    var content = comment.content;
    var creatorID = comment.creatorID;
    var timestamp = comment.timestamp;
    db.query(
        "INSERT INTO comment (content, creatorID, timestamp) VALUES (?,?,?)",
        [content, creatorID, timestamp],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
    console.log("createComment ran");
}
function selectCommentByID(commentID) {
    db.query(

    );
}

function deleteComment(commentID) {
    db.query("DELETE FROM comment WHERE idcomment = ?", commentID, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    console.log("deleteComment function ran");
}

function editComment(comment) { //change the content of the comment
    var content = comment.content;
    var commentID = comment.commentID
    db.query(
        "UPDATE comment SET content = ? WHERE commentID = ?",
        [content, commentID],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send(result);
            }
        }
    );
    console.log("update comment function ran");
}
module.exports = {
    insertComment,
    deleteComment,
    editComment
}