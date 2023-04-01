import React, { useEffect, useState } from "react";

const Api1 = () => {
  const [posts1, setPosts] = useState([]);

  // metodo get

  useEffect(() => {
    // x defecto es un get
    const getData = fetch("https://rickandmortyapi.com/api/character/1");

    getData
      .then((res) => res.json())
      .then((res) => setPosts(res))
      .catch((err) => console.log("catch :", err));
  }, []);

  console.log(posts1);
  return <div>Consumiendo Apis</div>;
};

export default Api1;
