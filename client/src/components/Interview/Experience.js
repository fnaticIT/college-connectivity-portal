import React from "react";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbars from "../Navbar/Navbar";
import "../Interview/Card.css"
function Experience() {
  const { id } = useParams();
  const [exp, setExp] = useState([]);
 
  useEffect(() => {
    const getexp = async () => {
      try {
        const f = await axios.get(`https://project-se-db.herokuapp.com/exp/${id}`);
        setExp(f.data);
      } catch (err) {
        console.log(err);
      }
    };

    getexp();
  }, []);

  return (
    <div className="">
      <div className="topx" style={{ background: "#7fe2f3" }}>
        <Navbars />
      </div>
      
      <div className="mm">
      <hr className="border"></hr>
      <p  style={{fontSize:40}}><b className="mm1">{exp.name}</b></p>
      <hr className="border"></hr>
      <p  style={{fontSize:30}}><b className="mm1">{exp.company_name}</b> ,&nbsp;  <i className="mm1">{exp.role}</i></p>
      <hr className="border"></hr>
      <br></br>
      <p className="para">{exp.desc}</p>
    </div>
    </div>
  );
}

export default Experience;
