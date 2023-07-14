import { set } from "date-fns";
import express from "express";
import pkg from "pg";
import { v4 as uuidv4 } from 'uuid';

const { Pool } = pkg;



const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Sarathi@123",
  port: 5432,
});

const app = express()
app.use(express.json())
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



app.get("/api/users",async (req,res) => {
  client.query('SELECT * FROM "users"', (err, result) => {

    if (err) {

      console.error('Error executing query:', err);

    } else {

      console.log('Query result:', result.rows);

      const usersresult = result.rows

        res.send(usersresult);

    }

  });


})

  app.post("/api/portfolio", async (req, res) => {
    const  setName =  req.body.name ;
    const setDescription =req.body.description;


    try {
      const uuid = uuidv4();
      console.log(uuid)
      console.log(setName)
      console.log(setDescription)
      const result = await client.query(
        `INSERT INTO portfolio (uuid,name,description) VALUES ('${uuid}','${setName}','${setDescription}')`
      );

      console.log('Query result:', result);

      if (!result.error) {
        const  value= {
          uuid,
          setName,
          setDescription,
        };

        res.send(value);
      } else {
        res.status(500).send('Error saving data');
      }
    } catch (error) {
      console.error('Error executing query:', error);
      res.status(500).send('Error saving data');
    }
  });

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`)); 
