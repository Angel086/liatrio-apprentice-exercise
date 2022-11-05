'use strict';

const express = require('express');

// Constants
const PORT = 80;
const HOST = '0.0.0.0';

// App

const app = express();
function unixTimestamp () {  
    return Math.floor(
      (Date.now()/1000)|0
    )
  }
app.get('/', (req, res,) => {
    app.set('json spaces', 40);
   // res.json({ a: 1 });
    var name = " my name is Angel Guerra Marquez"; 
    res.json({message: name, 
    "timestamp": (unixTimestamp()).toString()});
});
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});