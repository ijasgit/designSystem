import express from "express"
import pkg from "pg";

const { Pool } = pkg;

const client = new Pool({
  user: "postgres",
  host: "localhost",
  database: "my_newdb",
  password: "ijas@db1",
  port: 5432,
});

const app = express();
app.get("/api/data", async (req, res) => {
  client.connect();
  const query = 'select * from public."Authentication"';
  const result = await client.query(query);
  console.log(result.rows)
  res.send(result.rows)
  console.log("getting")
});


const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`listinng on port ${port}`));
