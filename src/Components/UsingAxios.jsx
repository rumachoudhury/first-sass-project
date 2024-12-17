import React from "react";
// import "./styles/axios.css"
// import "../styles/axios.css";

function UsingAxios() {
  const handleFeatch = async () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="btn">
      <button onClick={handleFeatch}>Featch Data</button>
    </div>
  );
}

export default UsingAxios;
