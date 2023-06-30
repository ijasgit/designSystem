import express from "express"
import pkg from "pg";

const { Pool } = pkg;

const client1 = new Pool({
  user: "postgres",
  host: "localhost",
  database: "my_newdb",
  password: "ijas@db1",
  port: 5432,
});

const app = express();
app.get("/api/data", async (req, res) => {
  client1.connect();
  const query = 'select * from public."Authentication"';
  const result = await client1.query(query);
  console.log(result.rows)
  res.send(result.rows)
  console.log("getting")
});


const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`listinng on port ${port}`));
