import pkg from "pg";
const { Client } = pkg;

const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Sarathi@123",
  port: 5432,
});
//connectToDatabase();
async function connectToDatabase() {
  try {
    await client.connect();
    console.log("Connected to the database!");
    const query = 'select * from public."my_newdb"';
    const result = await client.query(query);

    // Display the retrieved data
    console.log("Table Data:");
    const TableData=result.rows
    console.log(TableData);
   
   
    await client.end();
    console.log("end");
    return TableData;
    // You can execute queries and perform other operations here
  } catch (error) {
    // console.error("Error connecting to the database:", error);
  }
 
}

//export default connectToDatabase;




