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

}

function deleteComment(commentID) {

}

function editComment(commentID) {

}
module.exports = {
    insertComment,
    deleteComment,
    editComment
}