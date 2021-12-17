// import React from "react";
// import "../Main/Main.css";
// import { Link } from "react-router-dom";
// import { Navbar, Nav } from "react-bootstrap";
// import { useHistory } from "react-router";
// import "./Navbar.css";
// import img3 from "../../images/img4.png";
// import { FaBars } from "react-icons/fa";
// function Navbars() {
//   const history = useHistory();
//   function logout() {
//     localStorage.clear();
//     history.push("/register");
//     window.location.reload();
//   }

//   function handle1() {
//     history.push("/aboutus");
//   }
//   function handle3() {
//     history.push("/contact");
//   }
//   return (
//     <div>
//       <div className="topx">
//         <Navbar bg="dark bg-transparent" expand="lg" className="navbarhome">
//           <Navbar.Brand href="#">
//             <Link to="/" style={{ textDecoration: "none" }}>
//               <img src={img3} className="a brand logo " alt="" />
//               <span className="a brand logo">NITW CONNECT</span>
//             </Link>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll">
//             <FaBars size={30} style={{ color: "white" }} />
//           </Navbar.Toggle>
//           <Navbar.Collapse id="navbarScroll" id="click" className="xyz">
//             <Nav className="mr-auto my-2 my-lg-0 gg " style={{ maxHeight: "100px" }} navbarScroll>
//               <Nav.Link href="#" onClick={handle1} className="ax1">
//                 <span className="ax">About us</span>
//               </Nav.Link>
//               <Nav.Link href="#" onClick={handle3} className="ax2">
//                 <span className="ax">Contact </span>
//               </Nav.Link>
//               <Nav.Link href="#" className="ax3">
//                 <span className="ax">How to use</span>
//               </Nav.Link>
//               <Nav.Link href="#action2" className="ax4">
//                 <span onClick={logout} className="lix">
//                   <span className="b">Logout</span>
//                 </span>
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//       </div>
//     </div>
//   );
// }

// export default Navbars;
import React from "react";
import "../Main/Main.css";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Navbar.css";
import img3 from "../../images/img4.png";
import { FaBars } from "react-icons/fa";
function Navbars() {
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/register");
    window.location.reload();
  }
  function handle1() {
    history.push("/aboutus");
  }
  function handle3() {
    history.push("/contact");
  }
  return (
    // <div>
    <div className="topx">
      {/* bg="dark bg-transparent" */}
      <Navbar collapseOnSelect bg="bg-transparent" expand="lg" className="navbarhome" /* variant="dark"*/>
        {/* <Container> */}

        <Navbar.Brand href="#" className="logo_title_comb">
          <Link to="/" className="logo_title">
            <img alt="website-logo" src={img3} className=" brand logo logo_new" />
            {/* <span className="a brand logo">NITW CONNECT</span> */}
            <span className="brand logo title_new">NITW CONNECT</span>
          </Link>
        </Navbar.Brand>

        {/* "navbarScroll" */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
          <FaBars size={30} style={{ color: "white" }} />
        </Navbar.Toggle>

        {/* id ="click" "navbarScroll" */}
        <Navbar.Collapse id="responsive-navbar-nav" className="xyz">
          {/* add gg */}
          {/* expand-xl|lg|md|sm */}
          {/* <Nav className="mr-auto my-2 my-lg-0 nav_list_outer" navbarScroll>  */}
          <Nav className="me-auto  nav_list_outer" navbarScroll>
            <Nav.Link href="#" onClick={handle1} className="nav_list_options ax1" data-after="About Us">
              <span className="nav_list_links ax">About us</span>
            </Nav.Link>
            <Nav.Link href="#action2" onClick={handle3} className="nav_list_options ax2" data-after="Contact">
              <span className="nav_list_links ax">Contact</span>
            </Nav.Link>
            {/* <Nav.Link
              href="#action1"
              className="nav_list_options ax3"
              data-after="How to use"
            >
              <span className="nav_list_links ax">How to use</span>
            </Nav.Link> */}
            <Nav.Link
              href="#action2"
              className="nav_list_options ax5"
              data-after="Logout"
            >
              <span onClick={logout} className="nav_list_links ax">
                Logout
              </span>
            </Nav.Link>
            {/* <Nav.Link href="#action2" className="ax4">
              <span onClick={logout} className="lix">
                <span className="b">Logout</span>
              </span>
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
    // </div>
  );
}

export default Navbars;
