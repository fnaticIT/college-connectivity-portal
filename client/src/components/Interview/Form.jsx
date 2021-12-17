import React from "react";
import axios from "axios";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import Navbars from "./../Navbar/Navbar";
import "./Form.css";
function Form() {
  const { user } = useContext(AuthContext);
  const name = useRef();
  const company_name = useRef();
  const role = useRef();
  const desc = useRef();

  const handleClick = async (e) => {
    e.preventDefault();
   
    const exp = {
      
      userId: user._id,
      name: name.current.value,
      company_name: company_name.current.value,
      role: role.current.value,
      desc: desc.current.value,
      
    };
    try {
      await axios.post("https://project-se-db.herokuapp.com/exp", exp);
      alert("Submitted successfully!")
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="homex tempx">
      <Navbars />
      <div className="forms">
        <form onSubmit={handleClick} className="fnew">
          <h1 style={{ color: "white" }}>Share your experience</h1>
          <input placeholder="Your name" required ref={name} className="i sp" />
          <input placeholder="Company name" required ref={company_name} className="i sp" />
          <input placeholder="Role applied" required ref={role} className="i sp" />
          <textarea placeholder="Share your interview experience" rows="12" required ref={desc} className="i sp"></textarea>

          <button className="b bnew" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
