import React from "react";
// import "./styles/axios.css";
import axios from "axios";
import "../styles/axios.css";

function UsingAxios() {
  const handleFetch = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="btn">
      <button
        onClick={handleFetch}
        style={{ color: "red", padding: " 10px 20px", fontSize: "18px" }}
      >
        Fetch Data
      </button>
    </div>
  );
}

export default UsingAxios;
