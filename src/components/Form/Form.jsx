import React, { useState } from "react";

const Form = () => {
  const [userData, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false);

  const [msnError, setMsnError] = useState("");

  const handleChange = (e) => {
    setUserdata({ ...userData, [e.target.name]: e.target.value });
  };

  //   siempre se hace primero el prevent default para que no se refresque la pagina
  const handleSubmit = (e) => {
    e.preventDefault();

    // validaciones
    // nombre = numero de letrasd mayor a 2

    if (userData.name.length < 3) {
      console.log(" nombre no valido");
      setError(true);
      setMsnError("debe tener al menos 3 caracteres");
      return;
    }

    // validacion email con includes
    const incluye = userData.email.includes("@");

    if (!incluye) {
      console.log("email no valido");
      setError(true);
      setMsnError("debe contener el @ ");
      return;
    }

    const espacios = userData.password.includes(" ");
    if (espacios || userData.password.length < 5) {
      console.log(
        "ingrese contraseña valida, no puede tener espacios en blanco"
      );
      setError(true);
      setMsnError(
        "ingrese contraseña valida, no puede tener espacios en blanco"
      );
      return;
    }

    // instruccion a la base de datos BACKEND
    // al apretar enviar al final del formulario se activa el metodo submit
    console.log(userData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Nombre</label>
        {/* on change capturar los elementos de un formulario */}
        <input
          type="text"
          //   funcion para acceder al elemento exacto

          name="name"
          onChange={handleChange}
        />
        <label htmlFor="">E-mail</label>
        {/* on change capturar los elementos de un formulario */}
        <input
          type="text"
          //   funcion para acceder al elemento exacto

          name="email"
          onChange={handleChange}
        />

        <label htmlFor="">Contraseña</label>
        {/* on change capturar los elementos de un formulario */}
        <input
          type="text"
          //   funcion para acceder al elemento exacto

          name="password"
          onChange={handleChange}
        />

        <button type="submit">Enviar </button>
      </form>

      {
        // variable condicional

        error === true ? <h1>{msnError}</h1> : null
      }
    </div>
  );
};

export default Form;
