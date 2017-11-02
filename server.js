'use strict';

const express = require('express');
const app     = express();
const _       = require('lodash');

app.set('port', (process.env.PORT || 3000));

app.get('/', function(req, res) {
    res.send('hello world');
});

app.listen(app.get('port'));
