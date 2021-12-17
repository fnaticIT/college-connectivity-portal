import "./Friends.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Topbar from "../topbar/Topbar";
import { Avatar } from "@material-ui/core";
export default function Followers({ user }) {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://project-se-db.herokuapp.com/users/followers/" + user._id);
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [user]);

  const ProfileRightbar = () => {
    return (
      <>
        <Topbar />
        <h1 style={{ marginTop: "60px" }}>User followers</h1>
        <div className="" >
          <div className="cardby">
            {friends.map(
              (friend) =>
                friend.isClub !== true && (
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
      </>
    );
  };
  return (
    <div>
      <Topbar />

      <div className="rightbar">
        <div className="rightbarWrapper">
          <ProfileRightbar />
        </div>
      </div>
    </div>
  );
}
