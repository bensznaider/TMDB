import useInput from "../hooks/useInput";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { setUser } from "../state/user.js";
import axios from "axios";

const Login = () => {
  const username = useInput();
  const password = useInput();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        "http://localhost:5000/users/login/", {
          username: username.value,
          password: password.value,
        }
      )
      .then((respuesta) => {
        if (respuesta.status === 200) {
          const user = {
            id: respuesta.data.id,
            username: respuesta.data.username,
          };
          alert(`Bienvenido ${user.username}!`);
          dispatch(setUser(user));
        } else if (respuesta.status === 401) {
          console.log(respuesta)
          alert("Usuario o contraseña incorrectos.");
        } else {
          alert("Ocurrió un error al intentar loguearte.");
        }
        navigate("/");
      })
      .catch(
        (error) => {if (error.response.status===401) {alert("Usuario o password incorrecto.")}
        else {alert(`Al intentar loguearte ocurrió el siguiente error: ${error.message}`)}
        }
      );
  };
  return (
    <div>
      <h1>LOGIN</h1>
      <h3>Ingrese su usuario y contraseña:</h3>
      <form onSubmit={handleLogin}>
      Usuario<br></br><input
          type="text"
          value={username.value}
          onChange={username.onChange}
          placeholder="Nombre de usuario"
        /><br></br><br></br>
        Contraseña<br></br><input
          type="password"
          value={password.value}
          onChange={password.onChange}
          placeholder="Contraseña"
        /><br></br>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
