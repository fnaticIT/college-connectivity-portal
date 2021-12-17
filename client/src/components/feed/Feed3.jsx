import { useContext, useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";

import "reactjs-popup/dist/index.css";
import up_icon from "../../images/up-arrow-icon.png";
export default function Feed3({ username }) {
  const [posts, setPosts] = useState([]);

  const { user } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username ? await axios.get("https://project-se-db.herokuapp.com/posts/profile/" + username) : await axios.get("https://project-se-db.herokuapp.com/posts/timeline/" + user._id);
      setPosts(
        res.data.sort((p1, p2) => {
          return new Date(p2.createdAt) - new Date(p1.createdAt);
        })
      );
    };
    fetchPosts();
  }, [username, user._id]);

  const h1 = (e) => {
    history.push("/social");
  };

  /*function handle2(){
  window.open ("http://www.javascript-coder.com",
"mywindow","menubar=1,resizable=1,width=350,height=250");
}*/
  return (
    <div className="feed">
      <div className="feedWrapper">
        {user.isClub && <Share />}
        {/* {user.isClub && (
          <>
          <Popup trigger={<button> Trigger</button>} position="right center" className="popup">
            <Event />
          </Popup>
          <button onClick={handle2}>click</button>
        </>
        )}*/}
        <h1 className="head q1">{username}'s posts</h1>

        {posts
          //.sort((a,b)=>a.likes.length<b.likes.length?1:-1)
          .map((p) =>
            !p.isEvent ? (
              <div>
                <Post key={p._id} post={p} />
              </div>
            ) : (
              <div></div>
            )
          )}
      </div>
    </div>
  );
}
