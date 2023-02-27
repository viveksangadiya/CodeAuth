const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
const db = "mongodb://0.0.0.0:27017/eventsdb"

mongoose.connect(db, err => {
    if (err) throw console.log(err);
    else console.log("successful...")
});

// function verifyToken(req, res, next) {
//     if (!req.header.authorization) {
//         res.status(401).send("Unauthorized user...")
//     }
//     let token = req.header.authorization.split(' ')[1]
//     if (token === 1) {
//         res.status(401).send("Unauthorized user...")
//     }
//     let payload = jwt.verify(token, 'secretKey');
//     if (!payload) {
//         res.status(401).send("Unauthorized user...")
//     }
//     req.userId = payload.subject
//     next()
// }

router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData);
    user.save((error, responseData) => {
        if (error) {
            console.log(error)
        } else {
            let payload = { subject: responseData._id }
            let token = jwt.sign(payload, 'secret key')
            res.status(200).send({ token });
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
    User.findOne({ email: userData.email }, (error, user) => {
        if (error) {
            console.log("error occured!")
        } else {
            if (!user) {
                res.status(401).send("Invalid email...")
            } else {
                if (user.password !== userData.password) {
                    res.status(401).send("Invalid password")
                } else {
                    let payload = { subject: user._id }
                    let token = jwt.sign(payload, 'secret key')
                    res.status(200).send({ token });
                }
            }
        }
    })
})

router.get('/events', (req, res) => {
    let events = [{
            "id": "1",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "2",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "3",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "4",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "5",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "6",
            "name": "auto",
            "desc": "Auto Export"
        }
    ]
    res.json(events)
})

router.get('/special-events',(req, res) => {
    let events = [{
            "id": "1",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "2",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "3",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "4",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "5",
            "name": "auto",
            "desc": "Auto Export"
        },
        {
            "id": "6",
            "name": "auto",
            "desc": "Auto Export"
        }
    ]
    res.json(events)
})

router.get('/', function(req, res) {
    res.send("this is api");
})

module.exports = router;
//sudo service mongod start