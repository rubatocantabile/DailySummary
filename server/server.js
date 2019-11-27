const express = require('express');
const knex = require('knex');
const cors = require('cors');
const app = express();



app.use(express.json());
app.use(cors());

// api 
app.use('/api/posts', require('./api/posts'));

// server 띄우기
const port = 9000;
app.listen(port, function(){
  console.log('listening on port:' + port);
});
