// import React from "react";
// import { useHistory } from "react-router";
// import "./Interview.css";
// import Navbars from "../Navbar/Navbar";

// function Interview() {
//   const history = useHistory();
 
//   function hello() {
//     history.push("/form");
//   }
//   function hello2() {
//     history.push("/view");
//   }
//   return (
//     <div className="homex tempx">
//       <div className="topx">
//         <Navbars />
//       </div>

//       <div className="middle">
//         <div className="int">
//           <div onClick={hello} className="inside i1">
//             Add your Experience
//           </div>
//           <div onClick={hello2} className="inside i2">
//             View Experiences
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

// export default Interview;
import React from "react";
import { useHistory } from "react-router";
import "./Interview.css";
import Navbars from "../Navbar/Navbar";

function Interview() {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/register");
    window.location.reload();
  }
  function hello() {
    history.push("/form");
  }
  function hello2() {
    history.push("/view");
  }
  return (
    <div className="homex">
      <div className="topx">
        <Navbars />
      </div>

      <div className="middle">
        <div className="int">
          <div onClick={hello} className="inside i1">
            <p className="inside_content">Add your Experience</p>
          </div>
          <div onClick={hello2} className="inside i2">
            <p className="inside_content">View Experiences</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <p className="foo">Copyright © 2021 NITW Connect</p>
      </div>
    </div>
  );
}

export default Interview;
