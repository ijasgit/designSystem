import express from "express"
import pkg from "pg";

const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Sarathi@123",
  port: 5432,
});

const app = express();
app.get("/api/data", async (req, res) => {
  client.connect();
  const query = 'select * from public."Authentication"';
  const result = await client.query(query);
  console.log(result.rows)
  res.send(result.rows)
 
  
  console.log(result.rows)

//  res.send(data)
  console.log("getting");
});

const port = process.env.PORT || 8081;

app.listen(port, () => console.log(`listinng on port ${port}`));

