import "./post.css";
import { useContext, useEffect, useState, useRef } from "react";
import axios from "axios";
import { format } from "timeago.js";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useHistory } from "react-router";
import { Avatar } from "@material-ui/core";
import cimg from "../../images/cimg.png";
import { FaTrash } from "react-icons/fa";
import { FaComment } from "react-icons/fa";
export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const [cmt, setcmt] = useState([]);
  const desc = useRef();
  const history = useHistory();

  const [naman, setNaman] = useState(5);
  const [d, setd] = useState([]);
  const [cclass, setClass] = useState("displayc");

  function f(cmt) {
    const r = cmt;
    r.reverse();
    const r1 = r.slice(0, 1);
    setd(r1);
    setNaman(5);
  }

  const getComments = async () => {
    try {
      const friendList = await axios.get("https://project-se-db.herokuapp.com/posts/comments/" + post._id);

      setcmt(friendList.data);
      f(friendList.data);
    } catch (err) {
      console.log(err);
    }
  };

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post.likes.includes(currentUser._id));
  }, [currentUser._id, post.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`https://project-se-db.herokuapp.com/users?userId=${post.userId}`);
      setUser(res.data);
    };
    fetchUser();
  }, [post.userId]);

  const likeHandler = () => {
    try {
      axios.put("https://project-se-db.herokuapp.com/posts/" + post._id + "/like", { userId: currentUser._id });
    } catch (err) {}
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };
  const openPost = (e) => {
    //history.push(`/posts/${post._id}`);
  };

  function handlec() {
    if (cmt.length == 0) {
      getComments();
    }
    const rev = cmt;
    console.log(naman);
    const cmts = rev.slice(0, naman);
    setd(cmts);
    console.log(d);
    setNaman(naman + 5);
  }

  const handleClick = async (e) => {
    e.preventDefault();
    const newComment = {
      desc: desc.current.value,
    };

    try {
      await axios.put("https://project-se-db.herokuapp.com/posts/comments/" + post._id, newComment).then(() => {
        getComments();
        const f = document.getElementById("ff");
        f.reset();
      });
    } catch (err) {}
  };

  const handledelete = () => {
    console.log("delete");
    try {
      axios.delete("https://project-se-db.herokuapp.com/posts/" + post._id, post);
      window.location.reload();
    } catch (err) {}
  };
  function handle() {
    if (cclass === "") {
      setClass("displayc");
    } else {
      setClass("");
    }
  }
  return (
    <div className={false ? "post" : "post2"}>
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <Avatar style={{ height: "45px", width: "45px" }} src={""} className="postProfileImg"></Avatar>
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{format(post.createdAt)}</span>
          </div>
          <div className="postTopRight">
            {currentUser._id === post.userId && (
              <p onClick={handledelete} className="" style={{ color: "rgb(135, 210, 240)", cursor: "pointer" }}>
                <FaTrash size={20} />
              </p>
            )}
          </div>
        </div>
        <div className="postCenter" onClick={openPost}>
          <span className="postText">{post?.desc}</span>
          <hr className="border"></hr>
          <img className="postImg mm2" src={PF + post.img} alt="" />
          <hr className="border"></hr>
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img className="likeIcon" src={`${PF}heart.png`} onClick={likeHandler} alt="" />
            <span className="postLikeCounter">{like} likes</span>
          </div>

          <div className="" style={{ display: "flex", flexDirection: "column" }}>
            <div /*className={cclass=="displayc"?"":"displayc"}*/>
              <FaComment size={30} onClick={handle} style={{ cursor: "pointer", color: "rgb(135, 210, 240)" }} />
              {/* <img src={cimg} alt="comment" onClick={handle} style={{color:"rgb(135, 210, 240)"}}></img>*/}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "50px" }}>
          <div className={cclass} id="in">
            <form className="CommentForm" onSubmit={handleClick} id="ff">
              <input placeholder={"Add a comment " + currentUser.username} className="inp " ref={desc} style={{ color: "darkslateblue" }} />
              <button className="c_b" type="submit">
                ➤
              </button>
            </form>

            <div className="mm2" style={{ marginTop: "30px", marginLeft: "5.5%" }}>
              {d.map((comm) => (
                <div className="" style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "5px" }}>
                  <div className="Profile" style={{ marginRight: "30px" }}>
                    <Link to={`/profile/${comm.userId}`}>
                      <Avatar style={{ height: "45px", width: "45px" }} src={""} className="postProfileImg"></Avatar>
                    </Link>
                  </div>
                  <span className="desc" style={{ color: "darkslateblue" }}>
                    {comm.desc}
                  </span>
                  <hr className="border"></hr>
                </div>
              ))}
            </div>
          </div>
          <div className={cclass}>
            <p className="commButton" type="submit" onClick={handlec} style={{ color: "blueviolet", marginTop: "30px", marginLeft: "50%" }}>
              view more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
