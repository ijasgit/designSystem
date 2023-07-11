import React, { useEffect, useState } from "react";
import axios from "axios";

const Node = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/data");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error.response);
      }
    };

    fetchData();
  }, []);
  console.log(data);
  return (
    <div>
      {data.map((item, index) => (
        <div key={index} >
          <h1>{item.username}</h1>
          <h1>{item.password}</h1>
        </div>
      ))}
      <button>node</button>
    </div>
  );
};

export default Node;
