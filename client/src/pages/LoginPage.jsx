import { useContext, useState } from "react";
import loginRequest from "../api/loginRequest";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "../App";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing eye icons
import "../App";

/*

Ideas to implement
- Displaying quote 
- Improving styling
- Adding(making it work) update featrue


*/
export const LoginPage = () => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [token, setToken] = useContext(TokenContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginRequest(password)
      .then(({ token }) => {
        setToken(token);
        navigate("/");
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div>
      <h1>Login</h1>
      <div style={{ color: "red" }}>{error}</div>
      <form onSubmit={handleLogin}>
        <input
          className="login-input"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          placeholder="Enter Password"
          autoComplete="off"
        />
        <span onClick={togglePasswordVisibility}>
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </span>
        <br />
        <br />
        <button>Login</button>
      </form>
    </div>
  );
};
