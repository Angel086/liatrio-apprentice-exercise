'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App

const app = express();
function unixTimestamp () {  
    return Math.floor(
      (Date.now()/1000)|0
    )
  }
app.get('/', (req, res,) => {
    var name = " my name is Angel Guerra Marquez"; 
    res.send({message: name, 
    "timestamp": (unixTimestamp()).toString()});
});
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});