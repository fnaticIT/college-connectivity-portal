import { useContext, useRef, useState } from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
//import { FaMoon } from 'react-icons/fa';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
export default function Login(props) {
  const email = useRef();
  const password = useRef();
  const { isFetching, dispatch } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall({ email: email.current.value, password: password.current.value }, dispatch);
  };

  const toggleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className={props.flag === 1 ? "body" : ""}>
      <div className="container">
        <div class="form-container sign-in-container">
          <form onSubmit={handleClick} className="f1">
            <h3 className="head1">Login </h3>
            <input placeholder="Email" type="email" required ref={email} className="i" />
          
              <input placeholder="Password" type={showPass ? "text" : "password"} required minLength="6" ref={password} className="i" />
              {!showPass ? <FaEye size={20} onClick={toggleShowPass}  className="i4"/> : <FaEyeSlash size={20} onClick={toggleShowPass} className="i4"/>}
     
            {/* <label style={{cursor:"pointer", margin:"0.4rem 0.4rem 0"}}>
              <input type="checkbox" name="show_pass" value="false" onChange={toggleShowPass}/>
              <span className="show_pass_span">Show password</span>
            </label> */}
            <button className="b newb" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="white" size="20px" /> : "Log In"}
            </button>
          </form>
        </div>
      </div>
      <div className="footer">
        <p className="foo">From NITW for NITW !</p>

        <p className="foo">© Fnatic 2021</p>
      </div>
    </div>
  );
}
