import "./Clubs.css";

import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Topbar from "../topbar/Topbar";
import { Avatar } from "@material-ui/core";

export default function Clubs() {
  const { user } = useContext(AuthContext);
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://project-se-db.herokuapp.com/users/friends/" + user._id);
        setClubs(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  return (
    <div>
      <div className="mainclub">
        <div className="">
          <Topbar />
        </div>
        <div id="notify" className="kkk">
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
