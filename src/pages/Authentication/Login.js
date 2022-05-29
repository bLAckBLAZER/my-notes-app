import "./Authentication.css";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box } from "../../components";
import { userLogin } from "../../utils/authenticationCalls";
import { useAuth, useData } from "../../contexts";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { dispatchAuth } = useAuth();
  const { dispatchData } = useData();
  const navigate = useNavigate();
  const location = useLocation();
  const gotoPath = location.state?.from?.pathname || "/";

  const testData = {
    email: "omj@gmail.com",
    password: "test123",
  };

  return (
    <div className="auth flex-1">
      <Box className="mg-y-auto">
        <form>
          <div className="h2 txt-center">Login</div>
          <div className="width-100">
            <label className="input-label">
              Email:
              <div className="input-container">
                <input
                  type="email"
                  className="input"
                  id="email"
                  required={true}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </label>
          </div>
          <div className="width-100">
            <label className="input-label">
              Password:
              <div className="input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  className="input"
                  id="password"
                  required={true}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </i>
              </div>
            </label>
          </div>
          <div className="auth-actions">
            <div className="flex-1">
              <label>
                <input type="checkbox" id="remember-me" />
                Remember Me
              </label>
            </div>
            <div className="flex-1">
              <Link to="/signup">Forgot your password?</Link>
            </div>
          </div>
          <div className="auth-actions">
            <div className="flex-1">
              <button
                className="btn btn-primary"
                onClick={(e) =>
                  userLogin(
                    e,
                    dispatchAuth,
                    dispatchData,
                    email,
                    password,
                    navigate,
                    gotoPath
                  )
                }
              >
                Login
              </button>
            </div>
          </div>

          <div className="auth-actions">
            <div className="flex-1 txt-center">
              <p>
                Don't have an account?
                <span>
                  <Link to="/signup">Sign Up!</Link>
                </span>
              </p>
            </div>
          </div>
        </form>
        <div className="auth-actions">
          <div className="flex-1">
            <button
              className="btn btn-secondary"
              onClick={(e) =>
                userLogin(
                  e,
                  dispatchAuth,
                  dispatchData,
                  testData.email,
                  testData.password,
                  navigate,
                  gotoPath
                )
              }
            >
              Login as guest
            </button>
          </div>
        </div>
      </Box>
    </div>
  );
};
