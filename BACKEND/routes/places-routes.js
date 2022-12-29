const { RouterRounded } = require('@material-ui/icons');
const express = require('express');

const router = express.Router();

router.ger('/', (req, res, next) => {
    console.log('GET Request in Places');
    res.json({message: 'It works!'});
});