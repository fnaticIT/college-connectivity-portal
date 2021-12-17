// import axios from "axios";
// import { useRef } from "react";
// import "./register.css";
// import Login from "../login/Login";
// import img from "../../images/img2.png";
// let container;
// export default function Register() {
//   const username = useRef();
//   const email = useRef();
//   const password = useRef();
//   const passwordAgain = useRef();
//   const isClub = useRef();

//   const handleClick = async (e) => {
//     //console.log(password);
//     //console.log(passwordAgain);
//     e.preventDefault();
//     if (passwordAgain.current.value !== password.current.value) {
//       passwordAgain.current.setCustomValidity("Passwords don't match!");
//     } else {
//       const user = {
//         username: username.current.value,
//         email: email.current.value,
//         password: password.current.value,
//         isClub: isClub.current.value === "true" ? true : false,
//       };
//       try {
//         await axios.post("https://project-se-db.herokuapp.com/auth/register", user);
//         console.log(user);
//         window.location.reload();
//       } catch (err) {
//         console.log(err);
//       }
//     }
//   };
//   window.addEventListener("load", () => {
//     container = document.getElementById("container");
//   });

//   const signup = async (e) => {
//     container.classList.add("right-panel-active");
//   };

//   const signin = async (e) => {
//     container.classList.remove("right-panel-active");
//   };

//   return (
//     <div className="bodyx">
//       <div class="containerx" id="container">
//         <div class="form-container sign-up-container">
//           <form onSubmit={handleClick} className="f">
//             <h2>Create Account</h2>
//             <input placeholder="Username" required ref={username} className="i" />
//             <input placeholder="Email" required ref={email} type="email" className="i" />
//             <input placeholder="Password" required ref={password} type="password" minLength="6" className="i" />
//             <input placeholder="Password Again" required ref={passwordAgain} type="password" className="i" />
//             <input placeholder="Club login - true/false" required ref={isClub} type="text" className="i" />

//             <button className="b newb" type="submit">
//               Sign Up
//             </button>
//           </form>
//         </div>

//         <Login flag={0} />

//         <div class="overlay-container">
//           <div class="overlay">
//             <div class="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>To keep connected with us please login with your personal info</p>
//               <button class="ghost" id="signIn" onClick={signin} className="b newb">
//                 Sign In
//               </button>
//             </div>
//             <div class="overlay-panel overlay-right">
//               <img src={img} className="image1" alt=""></img>
//               <h1>NITW CONNECT</h1>
//               <p className="p">Enter your personal details and start journey with us</p>
//               <button class="ghost" id="signUp" onClick={signup} className="b">
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="footer">
//         <p className="foo">From NITW for NITW !</p>

//         <p className="foo">© Fnatic 2021</p>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import axios from "axios";
import { useRef } from "react";
import "./register.css";
import Login from "../login/Login";
import img from "../../images/img2.png";
import { Collapse } from "@material-ui/core";

let container;

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const isClub = useRef();
  const SecCodeInput = useRef();

  const [isClubValue, setIsClubValue] = useState(false);
  // const [RadioValue, setRadioValue] = useState(false);
  const [SecInputVisible, setSecInputVisible] = useState(false);
  const [SecCodeValid, setSecCodeValid] = useState(false);
  const handleClick = async (e) => {
    //console.log(password);
    //console.log(passwordAgain);
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else if (!SecCodeValid && isClubValue) {
      console.error("security code invalid!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
        //  isClub: isClub.current.value === "true" ? true : false,
        isClub: isClubValue,
      };
      try {
        await axios.post("https://project-se-db.herokuapp.com/auth/register", user);
        console.log(user);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }
    }
  };
  window.addEventListener("load", () => {
    container = document.getElementById("container");
  });

  const signup = async (e) => {
    container.classList.add("right-panel-active");
  };

  const signin = async (e) => {
    container.classList.remove("right-panel-active");
  };
  const onRadioChange = async (e) => {
    // setRadioValue(e.target.value=="true");
    const RadioValue = e.target.value == "true";
    console.log("\nradio value: " + e.target.value);
    console.log("radio value type: " + typeof RadioValue);
    setIsClubValue(RadioValue);
    setSecInputVisible(RadioValue);
    console.log("isClubValue " + isClubValue);
    console.log("Security input visibility " + SecInputVisible);
  };
  const CheckSecCode = async () => {
    const passcode = SecCodeInput.current.value;
    console.log("\nInput code entered: " + passcode);
    if (passcode === "1111" || passcode === "2222" || passcode === "3333") {
      setSecCodeValid(true);
      console.log("valid code");
      window.alert("valid code");
    } else {
      setSecCodeValid(false);
      console.log("invalid code");
      window.alert("Invalid code");
    }
    // setSecInputVisible(false);
  };
  return (
    <div className="bodyx">
      <div class="containerx" id="container">
        <div class="form-container sign-up-container">
          <form onSubmit={handleClick} className="f">
            <h2 class="head1">Create Account</h2>
            <input placeholder="Username" required ref={username} className="i" />
            <input placeholder="Email" required ref={email} type="email" className="i" />
            <input placeholder="Password" required ref={password} type="password" minLength="6" className="i" />
            <input placeholder="Password Again" required ref={passwordAgain} type="password" className="i" />
            <div className="i">
              <span className="radio_option">
                <label>
                  <input type="radio" value="true" name="club_acc" onChange={onRadioChange} required />
                  <span style={{ color: "grey", fontSize: "13.5px" }}>Club account</span>
                </label>
              </span>
              <span className="radio_option">
                <label>
                  <input type="radio" value="false" name="club_acc" onChange={onRadioChange} required />
                  <span style={{ color: "grey", fontSize: "13.5px" }}>Student account</span>
                </label>
              </span>
            </div>
            <Collapse in={isClubValue}>
              <div className="sec_code">
                {/*  onChangeText={(value)=> setSecCodeInput(value)} */}
                <input placeholder="Security code" required={isClubValue} type="text" minLength="4" maxLength="4" className="i sec_code_input" ref={SecCodeInput} />
                <button className="b_sec" type="button" onClick={CheckSecCode}>
                  Check
                </button>
              </div>
            </Collapse>

            <button className="b newb" type="submit">
              Sign Up
            </button>
          </form>
        </div>

        <Login flag={0} />

        <div class="overlay-container">
          <div class="overlay">
            <div class="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p className="p">Have an Account?</p>
              <button class="ghost" id="signIn" onClick={signin} className="b newb">
                Log In
              </button>
            </div>
            <div class="overlay-panel overlay-right">
              <img src={img} className="image1" alt=""></img>
              <h1>NITW CONNECT</h1>
              <p className="p">Don't have an account?</p>
              <button class="ghost" id="signUp" onClick={signup} className="b">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        {/* <p className="foo">From NITW for NITW !</p>

        <p className="foo">© Fnatic 2021</p> */}
        <p className="foo">Copyright © 2021 NITW Connect</p>
      </div>
    </div>
  );
}
