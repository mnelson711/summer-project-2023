const express = require("express");
var app = express();
const mysql = require("mysql");
var cors = require("cors");
const { createHash } = require("crypto");
const userdao = require("./userdao");
const threaddao = require("./threaddao");
const commentdao = require("./commentdao");
const { parse, stringify } = require("flatted");
const { serialize } = require("v8");
var nodemailer = require("nodemailer");
var Mailgen = require('mailgen')
const { EMAIL, PASSWORD } = require("../env.js");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "doadmin",
    password: "AVNS_ScmoB1Kr9TtZ8e4UbcW",
    host: "db-mysql-nyc1-14138-spectrum-do-user-14136635-0.b.db.ondigitalocean.com",
    port: "25060",
    database: "spectrum",
    sslmode: "REQUIRED",
});

function hash(string) {
    return createHash("sha256").update(string).digest("hex");
}

app.post("/selectByUserName", (req, res) => {
    const username = req.body.username;
    db.query(
        "SELECT * FROM users WHERE Username = ?",
        [username],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            res.send(result);
        }
    );
});

// app.post("/selectUsernameByUserID", (req, res) => {
//     const userID = req.body.userID;
//     console.log(userID);
//     (db.query("SELECT Username FROM users WHERE UserID = ?",
//         userID,
//         (err, result) => {
//             res.send(result);
//         }
//     ));
// });

app.post("/selectByUserID", (req, res) => {
    const userID = req.body.userID;
    console.log(userID);
    db.query("SELECT * FROM users WHERE UserID = ?", userID, (err, result) => {
        res.send(result);
    });
});

app.post("/selectAllUsers", (req, res) => {
    db.query("SELECT * FROM users", (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "None" });
        }
    });
});

app.post("/selectByEmail", (req, res) => {
    const email = req.body.email;
    db.query("SELECT * FROM users WHERE Email = ?", [email], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "None" });
        }
    });
});

app.post("/selectAllThreads", (req, res) => {
    db.query("SELECT * FROM threads", (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        if (result.length > 0) {
            res.send(result);
        } else {
            res.send({ message: "None" });
        }
    });
});

app.post("/selectByThreadID", (req, res) => {
    const threadID = req.body.threadID;
    db.query(
        "SELECT * FROM threads WHERE ThreadID = ?",
        [threadID],
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
    );
});

app.post("/selectByThreadTitle", (req, res) => {
    const title = req.body.title;
    db.query("SELECT * FROM threads WHERE Title = ?", [title], (err, result) => {
        if (err) {
            res.send({ err: err });
        }
        res.send(result);
    });
});

app.post("/addThread", (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const tags = req.body.tags;
    const author = req.body.author;
    const date = req.body.date;
    db.query(
        "INSERT INTO threads (Title, Description, Author, Tags, CreationDate) VALUES (?,?,?,?,?)",
        [title, description, author, tags, date],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            res.send(result);
        }
    );
});

app.post("/addComment", (req, res) => {
    const threadID = req.body.ThreadID;
    const content = req.body.content;
    const creatorID = req.body.creatorID;
    const timestamp = req.body.date;
    db.query(
        "INSERT INTO comment (content, creatorID, timestamp, ThreadID) VALUES (?,?,?,?)",
        [content, creatorID, timestamp, threadID],
        (err, result) => {
            if (err) {
                res.send({ err: err });
            }
            res.send(result);
        }
    );
});

app.post("/selectCommentsByThreadID", (req, res) => {
    const threadID = req.body.ThreadID;
    db.query(
        "SELECT * FROM comment WHERE ThreadID = ?",
        [threadID],
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
    );
});

app.post("/profileUpdate", (req, res) => {
    const userID = req.body.userID;
    const UserName = req.body.username;
    const FirstName = req.body.fname;
    const LastName = req.body.lname;
    const Pronoun = req.body.pronoun;
    db.query(
        "UPDATE users SET Username = ?, FirstName = ?, LastName = ?, Pronoun = ? WHERE userID = ?;",
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
    const picture = req.body.picture;

    const hashed = hash(Password);

    db.query(
        "INSERT INTO users (FirstName, LastName, Username, Email, Pronoun, DOB, Password, Picture) VALUES (?,?,?,?,?,?,?)",
        [FirstName, LastName, Username, Email, Pronoun, DOB, hashed, picture],
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
    const userEmail = "mnelson3@students.stonehill.edu";

    const hashed = hash(password);

    db.query(
        "SELECT * FROM users WHERE Username = ? AND Password = ?",
        [username, hashed],
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

app.post('/getFriends', (res, req) => {
    const userID = req.body.userID;

    db.query(
        "SELECT userTwo FROM FRIENDS WHERE userOne = ?",
        userID,
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
})

app.post('/addFriend', (res, req) => {
    const userOne = req.body.userOne;
    const userTwo = req.body.userTwo;
    const date = req.body.date;

    db.query(
        "INSERT INTO FRIENDS (UserOneID, userTwoID, datefriended) VALUES(?,?,?)",
        [userOne, userTwo, date],
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

app.post("/sendEmail", (res, req) => {
    let config = {
        service: "gmail",
        auth: {
            user: EMAIL,
            pass: PASSWORD,
        },
    };
    let userEmail = 'gracenelsonn@gmail.com';
    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme: "default",
        product: {
            name: "Spectrum Chat",
            link: "https://mailgen.js/",
        },
    });

    let response = {
        body: {
            name: "Spectrum Chat",
            intro: "Verify your email address to join our community!",
            table: {
                data: [
                    {
                        link: "https://exampleverification.com",
                        description: "A Backend application",
                    },
                ],
            },
            outro: "Looking forward to Seeing you",
        },
    };

    let mail = MailGenerator.generate(response);

    let message = {
        from: EMAIL,
        to: userEmail,
        subject: "Email Verification",
        html: mail,
    };

    transporter
        .sendMail(message)
        .then(() => {
            return res.status(201).json({
                msg: "you should receive an email",
            });
        })
        .catch((error) => {
            return;
        });
});

app.listen(3001, () => {
    console.log("On port 3001");
});
