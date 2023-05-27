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
// function selectThread(ThreadID) {

// }

function insertThread(thread) {//create a new thread
    var Description = thread.Description;
    var Author = thread.Author;
    var CreationDate = thread.CreationDate;
    var CommentCount = thread.CommentCount;
    db.query(
        "INSERT INTO threads (Description, Author, CreationDate, CommentCount) VALUES (?,?,?,?)",
        [Description, Author, CreationDate, CommentCount],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                res.send("Values Inserted");
            }
        }
    );
    console.log("createThread ran");
}

function deleteThread(_threadID) {//delete a thread
    db.query("DELETE FROM threads WHERE ThreadID = ?", _threadID, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
    console.log("deleteThread function ran");
}

function updateCommentCount(_threadID) { //add one each time a new comment is made
    let newcount = 0;
    db.query("select CommentCount from threads where ThreadID=?",_threadID, (err, result) => {
        if (err){
            console.log(err);
        } else {
            newcount = result[0].CommentCount + 1;
            console.log(newcount);
            db.query(
                "UPDATE threads SET CommentCount = ? WHERE ThreadID = ?",
                [newcount,_threadID],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(result);
                    }
                }
            );
            res.send(result);
        }
    });
    console.log(newcount);
    
    console.log("update commentcount ran");
}
function addTag(addedTag, ThreadID) {
    db.query(
        "SELECT tags FROM threads WHERE ThreadID = ?",
        ThreadID,
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                var newtag = result[0]+ " , " + addedTag;
                db.query(
                "UPDATE threads SET tags = ? WHERE ThreadID = ?",
                [newtag, ThreadID],
                (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.send(result);
                    }
                }
            );
            res.send(result);
            }
        }
    )
}

function removeTag(tag, ThreadID) {

}
module.exports = {
    //selectThread,
    insertThread,
    deleteThread,
    updateCommentCount,
    addTag,
    removeTag
}