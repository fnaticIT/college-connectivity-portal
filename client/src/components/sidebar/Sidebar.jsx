import "./sidebar.css";
import { RssFeed, Event } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { FaVideo } from "react-icons/fa";
import axios from "axios";
import { useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
export default function Sidebar() {
  const { user } = useContext(AuthContext);
  const history = useHistory();
  const [post, setPost] = useState([]);

  const hp = () => {
    history.push("/allclubs");
  };
  function handle2() {
    window.open("https://nitw-connect-meet.netlify.app/", "mywindow", "menubar=1,resizable=1,width=550,height=550");
  }
  const fetchPosts = async () => {
    const res = await axios.get("https://project-se-db.herokuapp.com/posts/posts/e");
    setPost(res.data);
  };
  function handle3(){
    history.push("/allclubs");
  }
  useEffect(() => {
    fetchPosts();
  }, [user]);

  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <button onClick={handle2} className="b sidebarButton" style={{ /*backgroundColor: "blueviolet"*/ backgroundColor: "darkslateblue", color: "white", marginTop: "3%", marginLeft: "20%" }}>
          <FaVideo size={16} style={{ marginRight: "15px" }} /> Video Meet
        </button>

        <hr className="sidebarHr" />
        <ul className="sidebarList">
          <li className="sidebarItem"></li>
          <RssFeed className="sidebarIcon" />
          <Link to="/clubs" className="side" style={{ textDecoration: "none" }}>
            <span className="sidename">My Clubs</span>
          </Link>

          <li className="sidebarListItem"></li>
          <RssFeed className="sidebarIcon" />
          <Link to="/friends" className="side" style={{ textDecoration: "none" }}>
            <span className="sidename">My Friends</span>
          </Link>

          <li className="sidebarListItem"></li>
          <RssFeed className="sidebarIcon" />
          <Link to="/followers" className="side" style={{ textDecoration: "none" }}>
            <span className="sidename">My Followers</span>
          </Link>
        </ul>
        <button className="b sidebarButton" onClick={hp} >
          ALL CLUBS
        </button>
        <hr className="sidebarHr" />
        <li className="sidebarListItem">
          <Event className="sidebarIcon" style={{color:"blueviolet"}}/>
          <span className="headside" style={{color: "blueviolet"}}>Announcement</span>
        </li>

        <RssFeed className="sidebarIcon" />
        <Link to="/followers" className="side" style={{ textDecoration: "none" }}>
          <span className="sidename">Nothing to show</span>
        </Link>
        <hr className="sidebarHr" />
        <li className="sidebarListItem">
          <Event className="sidebarIcon" style={{color:"blueviolet"}}/>
          <span className="headside" style={{color:"blueviolet"}}>Today's Events</span>
        </li>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
          <span className="headside">Name</span>
          <span className="headside">Club</span>
        </div>
        <hr className="sidebarHr" style={{ marginBottom: "20px",marginTop:"-10px" }} />

        <ul className="sidebarFriendList">
          {post.map((p) => (
            <>
              <div onClick={handle3}  className="eventsd" style={{ display: "flex", justifyContent: "space-between",paddingLeft:"15px", paddingRight: "15px", borderRadius: "10px", paddingTop: "10px", paddingBottom: "10px", border: "1px solid darkslateblue" ,marginLeft:"-10px",marginRight:"-10px",marginTop:"10px"}}>
                <span className="headside">{p.eventName}</span>
                <span className="headside">{p.createdby}</span>
              </div>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}
