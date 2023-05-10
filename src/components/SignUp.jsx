import axios from "axios";
import useInput from "../hooks/useInput.js";
import { useNavigate } from "react-router";

const SignUp = () => {
  const username = useInput();
  const email = useInput();
  const password = useInput();
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/users/signup", {
        username: username.value,
        email: email.value,
        password: password.value,
      })
      .then((respuesta) => {
        alert("Usuario registrado correctamente.");
        navigate("/")
      })
      .catch(
        (error) =>
          `Al intentar registrar el usuario ocurrió el siguiente error: ${error}`
      );
  };
  return (
    <div>
      <h1>CREAR UN USUARIO</h1>
      <h3>Ingrese los siguientes datos:</h3>
      <form onSubmit={handleSubmit}>
        Nombre de usuario<br></br><input
          type="text"
          value={username.value}
          onChange={username.onChange}
          placeholder="Nombre de usuario"
        /><br></br><br></br>Dirección de email<br></br>
        <input
          type="text"
          value={email.value}
          onChange={email.onChange}
          placeholder="ejemplo@ejemplo.com"
        /><br></br><br></br>Password<br></br>
        <input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Password"
        /><br></br>
        <button type="submit" className="login-button">
          Crear usuario
        </button>
      </form>
    </div>
  );
};

export default SignUp;
