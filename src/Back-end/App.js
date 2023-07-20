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

app.post("/api/login", async (req, res) => {
  const datauserName = req.body.username;
  console.log(datauserName);
  const dataPassword = req.body.password;
  console.log(dataPassword);

  client.query(
    'SELECT password FROM "my_newdb" WHERE usersname = $1',
    [datauserName],
    (err, result) => {
      if (result.rows.length > 0) {
        const storedPassword = result.rows[0].password;

        if (dataPassword === storedPassword) {
          console.log(true);
          res.send(true);
        }
      } else {
        res.send(false);
        console.log(false);
      }
    }
  );

  // if (result.rows.length > 0) {
  //   const storedPassword = result.rows[0].password;

  //   if (dataPassword === storedPassword) {
  //     res.json({ success: true });
  //   } else {
  //     res.json({ success: false });
  //   }
  // } else {
  //   res.json({ success: false });
  // }
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

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`Listening on port ${port}`));
