import express from "express";
import pkg from "pg";

const { Pool } = pkg;

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "my_newdb",
  password: "test",
  port: 5432,
});

const app = express()
app.get("/api/data", async (req, res) => {

  client.query('SELECT * FROM public."my_newdb"', (err, result) => {

    if (err) {

      console.error('Error executing query:', err);

    } else {

      console.log('Query result:', result.rows);

      const result1 = result.rows

        res.send(result1);

    }

  });

});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`)); 
