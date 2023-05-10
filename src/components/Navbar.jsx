import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../state/user.js";

const Navbar = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setUser({ id: null, username: "" }));
    alert("Cerraste sesión.");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <div id="logo">TMDB</div>
      </Link>
      <div>
        {user.id !== null ? (
          <div>
            <span className="login-button" id="username">
              {user.username}
            </span>
            <span className="logout-button" onClick={handleLogout}>
              Logout
            </span>
          </div>
        ) : (
          <div>
            <Link to="/signup">
              <span className="signup-button">Sign up</span>
            </Link>
            <Link to="/login">
              <span className="login-button">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
