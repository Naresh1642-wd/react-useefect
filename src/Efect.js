import react, { useEffect, useState } from "react";
import axios from "axios";

function Efect() {
  const [data, setData] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[0].email);
        console.log("API was Called");
      });
  });

  return <div>Hello {data}</div>;
}
export default Efect;
