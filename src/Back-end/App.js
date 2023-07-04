import express from "express";
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Sarathi@123",
  port: 5432,
});

const app = express()
app.get("/api/data", async (req, res) => {
  try {
    await client.connect()
    console.log("Connected to the database!");

    const query = 'select * from public."my_newdb"';
    const result = await client.query(query);
    res.send(result.rows);

    console.log(result.rows);
    console.log("Getting");
  } catch (error) {
    console.error("An error occurred:", error);
  } 
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`)); 
