const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use(bodyParser.json());
app.use(cors());

const proxyOptions = {
  target: 'http://localhost:6003', 
  changeOrigin: true,
};
const proxy = createProxyMiddleware('/api', proxyOptions);
app.use('/api', proxy);

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'Sarathi@123',
  port: 5432, 
});


app.post('/SignUp', async (req, res) => {
  const { users, password } = req.body;
   console.log('test')
  try {
    const client = await pool.connect();
    await client.query('INSERT INTO public.my_newdb (users, password) VALUES ($1, $2)', [
      users,
      password,
    ]);
    client.release();
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(6003, () => {
   console.log('Server listening on port 6003');
   
 });

// app.use(cors({
//    origin: 'http://localhost:6003/SignUp', // Replace with the desired domain
 
//  }));

// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//       console.log( data );
//       res.end( data );
//    });
// })

// var server = app.listen(8081, function () {
//    var host = server.address().address
//    var port = server.address().port
//    console.log("Example app listening at http://%s:%s", host, port)
// })