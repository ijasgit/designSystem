import { set } from "date-fns";
import express from "express";
import pkg from "pg";
import { v4 } from "uuid";

const { Pool } = pkg;

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "test",
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
  console.log(create_date);

  console.log(dataName);
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
  console.log(dataPassword, dataUserName);

  await client.connect();
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
  // res.json({
  //   message: "Data received successfully 123466",
  //   dataPassword,
  //   dataUserName
  // })
// });

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`));
