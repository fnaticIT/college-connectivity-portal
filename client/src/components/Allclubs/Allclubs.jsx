import "./Allclubs.css";
import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Topbar from "../topbar/Topbar";
import { Avatar } from "@material-ui/core";
//import { useHistory } from "react-router";
export default function Allclubs() {
  const { user } = useContext(AuthContext);
  const [clubs, setClubs] = useState([]);

  const [toggle, setToggle] = useState(false);
  const [post, setPost] = useState([]);
const [count, setCount] = useState(0);
  //const history = useHistory();

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://project-se-db.herokuapp.com/users/usersList");
        setClubs(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
    fetchPosts();
  }, [user]);

  const fetchPosts = async () => {
    const res = await axios.get("https://project-se-db.herokuapp.com/posts/posts/a");
    setPost(
      res.data.sort((p1, p2) => {
        return new Date(p2.createdAt) - new Date(p1.createdAt);
      })
    );
 
  };
  function handle() {
   
    setToggle((toggle) => !toggle);
  }

  return (
    <div>
      <div className="mainclub">
        <div className="">
          <Topbar />
        </div>
        <div id="notify" className="kkk">
          <button onClick={handle} className="noti">
            Notifications
            <div className="circle"> {post.length} </div>
          </button>

          <div style={{ display: toggle ? "block" : "none" }} className="noti">
            {post.map((p) =>
              !p.isEvent ? (
                <li>
                  {p.createdby} <span>posted today</span>
                </li>
              ) : null
            )}
          </div>
          <div className="cardby">
            {clubs.map(
              (friend) =>
                friend.isClub && (
                  <div className="columns">
                    <div className="clubss ">
                      <Link to={"/profile/" + friend.username} style={{ textDecoration: "none" }}>
                        <div>
                          <div className="ins">
                            <div>
                              <Avatar src={""} style={{ height: "70px", width: "70px" }} className="in"></Avatar>
                              <div className="clubdiv">
                                <span className="clubnames">{friend.username}</span>
                              </div>
                            </div>
                            {/*} <div className="events">Events
                            
                            <div className="">0</div>
                            </div>
*/}
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
            )}
          </div>
        </div>
        <div className="footer"></div>
      </div>
    </div>
  );
}
