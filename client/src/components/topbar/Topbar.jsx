import "./topbar.css";
import { Search } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useContext, useRef } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

import { ThemeProvider, createGlobalStyle } from "styled-components";
import useTheme from "./useTheme";
import ToggleMode from "./ToggleMode";
import style from "styled-theming";
import { Avatar } from "@material-ui/core";
import img3 from "../../images/img4.png";

const getBackground = style("mode", {
  light: "#ffffff",
  dark: "#111",
});

const getForeground = style("mode", {
  light: "#111",
  dark: "#ffffff",
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
`;

export default function Topbar() {
  //const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const { user } = useContext(AuthContext);
  const history = useHistory();
  function logout() {
    localStorage.clear();
    history.push("/register");
    window.location.reload();
  }
  const name = useRef();

  const theme = useTheme();

  const handle = (e) => {
    e.preventDefault();
    const n = name.current.value;
    history.push("/profile/" + n);
  };

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />

        <div className="topbarContainer2 sticky">
          <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }}>
              <img src={img3} className="a brand logo " alt="" />
              <span className="a brand logo">NITW CONNECT </span>
            </Link>
          </div>
          <div className="topbarCenter">
            <div className="">
              <form onSubmit={handle} className="frm">
                <input placeholder="Search for user" className="searchInput" ref={name} />
                <button type="submit" className="bb">
                  <Search className="searchIcon" />
                </button>
              </form>
            </div>
          </div>

          <div className="topbarRight">
            <div className="topbarIcons" style={{marginLeft:"40%"}}>
              <ToggleMode />

              <span onClick={logout} className="" style={{ marginLeft: "40px" ,marginTop:"-2px"}}>
                <span className="ky" style={{padding:"15px"}}>Logout</span>
              </span>
            </div>
            <div></div>

            <Link to={`/profile/${user.username}`} style={{ textDecoration: "none" }}>
              <Avatar alt={user.username} src={""} className="topbarImg">
                {user.username.charAt(0)}
              </Avatar>
            </Link>
          </div>
        </div>
      </>
    </ThemeProvider>
  );
}
