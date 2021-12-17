import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

import { FcBadDecision } from "react-icons/fc";
import { useHistory } from 'react-router';

function Card({ name, company, role ,id}) {


  const history = useHistory();
  function handle() {history.push(`/exp/${id}`)}
  
  return (
         
      <div class="column">
        <div class="cardi">
          <h1>
            <FcBadDecision />
          </h1>
          <p className="nam">{name}</p>
          <p>
            <span className="com">{company}</span>
            <span className="k"> , </span>
            <span className="role">{role}</span>
          </p>

          <Link onClick={handle} className="li l">Read More</Link>
        </div>
      </div>
    
  );
}

export default Card;
