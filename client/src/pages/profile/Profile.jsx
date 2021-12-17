import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Feed3 from "../../components/feed/Feed3";

import Rightbar from "../../components/rightbar/Rightbar";
import {useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import img from "../../images/img.jpg";
import img2 from "../../images/noAvatar.png";
import Notfound from "../../components/Notfound/Notfound";
export default function Profile() {
  
  const [user, setUser] = useState({});
  const username = useParams().username;
 
 
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://project-se-db.herokuapp.com/users?username=${username}`);
      setUser(res.data);
    };
    fetchUser();
  }, [username]);


  return user.username ? (
    <>
      <Topbar />

      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img className="profileCoverImg" src={img} alt="" />
              <div className="im">
                <img className="profileUserImg" src={img2} alt="" />
              </div>
              <div className="but">
             
              </div>
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{username}</h4>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed3 username={username} />
            
            <Rightbar user={user} />
          </div>
        </div>
      </div>
    </>
  ) : (
    <Notfound />
  );
}
