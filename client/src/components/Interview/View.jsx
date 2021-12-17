import React from "react";
import "./View.css";
import Navbars from "../Navbar/Navbar";
import Card from "./Card";

import { useEffect, useState } from "react";
import axios from "axios";

function View() {
  const [exp, setExp] = useState([]);

  useEffect(() => {
    const getexp = async () => {
      try {
        const f = await axios.get("https://project-se-db.herokuapp.com/exp");
        setExp(f.data);
      } catch (err) {
        console.log(err);
      }
    };

    getexp();
  }, []);

  return (
    <div>
      <div className="topx" >
        <Navbars />
      </div>
      <div className="kk">
        <div className="cardby">
          {exp.map((exe) => (
            <Card name={exe.name} company={exe.company_name} role={exe.role} id={exe._id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default View;
