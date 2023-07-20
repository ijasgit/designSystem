import { set } from "date-fns";
import express, { query } from "express";
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

const app = express();
app.use(express.json());

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
app.delete("/api/portfolio/:uuid", async (req, res) => {
  const uuid = req.params.uuid;

  try {
    const query = 'DELETE FROM "portfolio" WHERE uuid = $1';
    await client.query(query, [uuid]);
    res.json({ message: "Row deleted successfully" });
  } catch (error) {
    console.error("Error deleting row:", error);
    res.status(500).json({ error: "Error deleting row" });
  }
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
  const create_date = req.body.data.formattedDate;
  const dataOwner = req.body.data.owner;
  const dataStatus = req.body.data.status;
  const uuid = v4();

  const query =
    "INSERT INTO portfolio (uuid, name, description,portfolio_owner,status,create_date) VALUES ($1, $2,$3,$4,$5,$6)";
  const values = [
    uuid,
    dataName,
    dataDescription,
    dataOwner,
    dataStatus,
    create_date,
  ];
  await client.query(query, values);
  res.json({ message: "Data received successfully" });
});

app.post("/api/login", async (req, res) => {
  const dataUserName = req.body.username;
  const dataPassword = req.body.password;

  // await client.connect();
  const query = 'SELECT password FROM "Authentication" WHERE username = $1';
  const result = await client.query(query, [dataUserName]);

  if (result.rows.length > 0) {
    const dbPassword = result.rows[0].password;
    if (dbPassword === dataPassword) {
      res.send(true);
    } else {
      res.send(false);
    }
  } else {
    res.send(false);
  }
});

app.post("/api/deleterow/", async (req, res) => {
  const dataId = req.body.id;
  // await client.connect();
  const query = "DELETE FROM portfolio WHERE uuid = $1";
  await client.query(query, [dataId]);
  res.send("Row deleted successfully!");
});

app.get("/api/edit", async (req, res) => {
  const uuid = req.query.id;
  // await client.connect();
  const query =
    "SELECT name,description,portfolio_owner,status,create_date FROM portfolio WHERE uuid = $1 LIMIT 1";
  client.query(query, [uuid], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result);
      const portfolioOwner = result.rows;
      res.send(portfolioOwner);
    }
  });
});

app.get("/api/ownername", async (req, res) => {
  const ownername = req.query.id;
  console.log(ownername, "ownername");
  try{
    // await client.connect();
  const query = "SELECT label FROM users WHERE uuid = $1";
  client.query(query, [ownername], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result);
      const ownername = result.rows;
      res.send(ownername);
    }
  })}
  catch(error){
    console.log(error)
  } 
});

app.put("/api/put", async (req, res) => {
  const uuid = req.query.id;
  const name = req.body.name;
  const description = req.body.description;
  const owneruuid=req.body.owneruuid;


  // await client.connect();
  const query = `
  UPDATE portfolio 
  SET name = $1, description = $2,portfolio_owner=$3
  WHERE uuid = $4
  RETURNING *
`;

  client.query(query, [name, description,owneruuid, uuid], (err, result) => {
    if (err) {
      console.error("Error executing query:", err);
    } else {
      console.log("Query result:", result);
      const portfolioOwner = result.rows;
      res.send(portfolioOwner);
    }
  });
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`));
