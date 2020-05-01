const express = require('express')
const { v4: uuid } = require('uuid')
const logger = require('../logger')


const bookmarkRouter = express.Router()
const bodyParser = express.json()





bookmarkRouter
    .route('/')
    .get((req, res) => {
        //implementation logic
        res.send('Get request filled')

    })

bookmarkRouter
    .route('/:id')
    .get((req,res) => {
        //implementation logic
    })
    .delete((req,res) => {
        //implementation logic

    })

    module.exports= bookmarkRouter