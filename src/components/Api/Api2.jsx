import React, { useState } from "react";

// al get que es  el metodo para obtener un dato , se pasa solo en elfecth solo el link,
// los metodos que necesitan cambiar info , crear o actualizar se le agrega un objeto(put,patch)
// "https://jsonplaceholder.typicode.com/posts",{aqui va el metodo
// headers: {'Content-Type': 'application/json},body:JSON.stringify({   data })
// crear algo ejem =>

const Api2 = () => {
  const [post2, setPosts2] = useState(false);

  const crearPost = () => {
    const postdata = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "prueba2",
        userId: 2,
        body: "prueba 2 funcionando metodo post",
      }),
    });

    postdata.then((res) => setPosts2(true)).catch();
  };

  console.log(post2);
  return (
    <div>
      <button onClick={crearPost}> crear post</button>
    </div>
  );
};

export default Api2;
