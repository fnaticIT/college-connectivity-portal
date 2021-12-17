import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./PostDetails.css";
import Topbar from "../topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
//import {  useHistory } from "react-router-dom";
import { useContext, useRef } from "react";

function PostDetails() {
  //const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { id } = useParams();
  const [post, setPosts] = useState({});

  const [cmt, setcmt] = useState([]);

  useEffect(() => {
    const getComments = async () => {
      try {
        const friendList = await axios.get("https://project-se-db.herokuapp.com/posts/comments/" + post._id);
        setcmt(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getComments();
  }, [post]);

  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get("https://project-se-db.herokuapp.com/posts/" + id);
        setPosts(friendList.data);
    
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [id]);


  const desc = useRef();
  //const history = useHistory();

 // const { id } = useParams();

  const { user } = useContext(AuthContext);

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(user._id);
    const comment = desc.current.value;
    console.log(comment);
    try {
      await axios.put("https://project-se-db.herokuapp.com/posts/comments/" + id + "/" + desc.current.value);
      console.log(desc.current.value);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div className="postc">
      <Topbar />

      <div class="subscribe-box">
        <h2>Comment below</h2>
        <form class="subscribe" onSubmit={handleClick}>
          <textarea rows="2" cols="40" type="textbox" placeholder="" autocomplete="off" required="required" ref={desc} />
          <button type="submit">
            {" "}
            <span>Submit</span>
          </button>
        </form>
        <div className="footer"></div>
      </div>

      <div className="postCenter">
       
      </div>
      <h2 className="posth">{post.desc}</h2>
      <hr className="t"></hr>
      <div className="t1">
        <h4 >{cmt.length} comments</h4>
      </div>
      <div className="postBottomRight">
        {cmt.map((friend) => (
          <p className="c">{friend}</p>
        ))}
      </div>
    </div>
  );
}

export default PostDetails;
