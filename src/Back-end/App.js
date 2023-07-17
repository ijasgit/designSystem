import { set } from "date-fns";
import express from "express";
import pkg from "pg";
import { v4 } from "uuid";

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
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result.rows);
      const result1 = result.rows;
      res.send(result1);
    }
  });
});

app.get("/api/users", async (req, res) => {
  client.query('SELECT * FROM "users"', (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result.rows);
      const portfolioOwner = result.rows;
      res.send(portfolioOwner);
    }
  });
});

app.get("/api/portfolio", async (req, res) => {
  client.query('SELECT * FROM "portfolio"', (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result.rows);
      const portfolioOwner = result.rows;
      res.send(portfolioOwner);
    }
  });
});

app.post("/api/portfolio", async (req, res) => {
  const dataName = req.body.data.name;
  const dataDescription = req.body.data.description;
  const create_date = req.body.data.formattedDate
  const dataOwner = req.body.data.owner;
  const dataStatus =req.body.data.status
  const uuid = v4();
  console.log(create_date)

  console.log(dataName);
  const query =
    "INSERT INTO portfolio (uuid, name, description,portfolio_owner,status,create_date) VALUES ($1, $2,$3,$4,$5,$6)";
  const values = [uuid, dataName, dataDescription, dataOwner,dataStatus,create_date];
  await client.query(query, values);
  res.json({ message: "Data received successfully" });
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`));
