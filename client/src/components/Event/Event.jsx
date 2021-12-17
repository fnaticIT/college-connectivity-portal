import React from "react";
import { PermMedia, Cancel } from "@material-ui/icons";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

import Navbars from "../Navbar/Navbar";
const Event = () => {
  const { user } = useContext(AuthContext);

  const eventDesc = useRef();
  const name = useRef();
  const date = useRef();

  const [file, setFile] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,

      createdby: user.username,
      createdtype: user.isClub ? "club" : "none",
      isEvent: true,
      eventName: name.current.value,
      eventDesc: eventDesc.current.value,
    };
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      console.log(newPost);
      try {
        await axios.post("https://project-se-db.herokuapp.com/upload", data);
      } catch (err) {}
    }
    try {
      await axios.post("https://project-se-db.herokuapp.com/posts", newPost);
      window.location.reload();
    } catch (err) {}
  };

  return (
    <div>
      <div className="homex">
        <Navbars />
        <div className="forms cl">
          <div className="" style={{ width: "90%" }}>
            <div className="" style={{ flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ marginRight: "", marginLeft: "10%", width: "20%", color: "white" }}>Event Name</label>
                <input placeholder="" className="i sp" ref={name} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ marginRight: "", marginLeft: "10%", width: "20%", color: "white" }}>Event description</label>
                <input placeholder="" className="i sp" ref={eventDesc} />
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <label style={{ marginRight: "", marginLeft: "10%", width: "20%", color: "white" }}>Event Date & Time</label>
                <input placeholder="" className="i sp" ref={date} type="datetime-local" />
              </div>
            </div>
            <hr className="shareHr" />
            {file && (
              <div className="shareImgContainer">
                <img className="shareImg" src={URL.createObjectURL(file)} alt="" />
                <Cancel className="shareCancelImg" onClick={() => setFile(null)} />
              </div>
            )}
            <form className="shareBottom" style={{ marginRight: "-25%", marginLeft: "10%", width: "50%" }} onSubmit={submitHandler}>
              <div className="shareOptions">
                <label htmlFor="file" className="shareOption">
                  <PermMedia htmlColor="tomato" className="shareIcon" />
                  <span className="shareOptionText">Photo or Video</span>
                  <input style={{ display: "none" }} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e) => setFile(e.target.files[0])} />
                </label>
              </div>
              <div>
                <button className="b" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
