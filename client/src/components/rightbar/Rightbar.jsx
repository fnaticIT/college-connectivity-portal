import "./rightbar.css";

import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import EditableLabel from "react-inline-editing";

export default function Rightbar({ user }) {
  const { user: currentUser, dispatch } = useContext(AuthContext);
  const f = currentUser.followings.includes(user._id);

  const [followed, setFollowed] = useState(f);

  const handleClick = async () => {
    try {
      if (followed === true) {
        await axios.put(`https://project-se-db.herokuapp.com/users/${user._id}/unfollow`, {
          userId: currentUser._id,
        });
        setFollowed(!followed);
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(`https://project-se-db.herokuapp.com/users/${user._id}/follow`, {
          userId: currentUser._id,
        });
        setFollowed(!followed);
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {}
  };

  const handleFocusOut1 = async (text) => {
    const newuser = {
      city: text,
      id: user._id,
    };
    try {
      console.log(newuser);
      await axios.put("https://project-se-db.herokuapp.com/users/update/city", newuser);
      window.location.reload();
    } catch (err) {
      console.log(500);
    }
  };
  const handleFocusOut2 = async (text) => {
    const newuser = {
      from: text,
      id: user._id,
    };
    try {
      console.log(newuser);
      await axios.put("https://project-se-db.herokuapp.com/users/update/country", newuser);
      window.location.reload();
    } catch (err) {
      console.log(500);
    }
  };
  const handleFocusOut3 = async (text) => {
    const newuser = {
      relationship: text,
      id: user._id,
    };
    try {
      console.log(newuser);
      await axios.put("https://project-se-db.herokuapp.com/users/update", newuser);
      window.location.reload();
    } catch (err) {
      console.log(500);
    }
  };

  const ProfileRightbar = () => {
    return (
      <>
        <div className="right_bar">
          {user.username !== currentUser.username && (
            <button className="rightbarFollowButton" onClick={handleClick}>
              {followed === true ? "Unfollow" : "Follow"}
            </button>
          )}
          <h4 className="rightbarTitle">User information</h4>
          <div className="rightbarInfo">
            {/* <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            {user.username === currentUser.username && <EditableLabel text={user.city} labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocusOut={handleFocusOut1} />}
            {user.username !== currentUser.username && <span className="rightbarInfoValue">{user.city}</span>}
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Country:</span>
            {user.username === currentUser.username && <EditableLabel text={user.from} labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocusOut={handleFocusOut2} />}
            {user.username !== currentUser.username && <span className="rightbarInfoValue">{user.from}</span>}
          </div> */}
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Email:</span>
              {user.username === currentUser.username && <EditableLabel text={user.email} labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocusOut={handleFocusOut1} />}
              {user.username !== currentUser.username && <span className="rightbarInfoValue">{user.email}</span>}
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">Followers:</span>
              {/* {user.username === currentUser.username && <EditableLabel text={user.followers.length} labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocusOut={handleFocusOut1} />} */}
              <span className="rightbarInfoValue">{user.followers.length}</span>
            </div>
            <div className="rightbarInfoItem">
              {/* <span className="rightbarInfoKey">Relationship:</span>
            {user.username === currentUser.username && <EditableLabel text={user.relationship === 1 ? "Single" : user.relationship === 1 ? "Married" : "-"} labelClassName="myLabelClass" inputClassName="myInputClass" inputWidth="200px" inputHeight="25px" inputMaxLength="50" labelFontWeight="bold" inputFontWeight="bold" onFocusOut={handleFocusOut3} />}

            {user.username !== currentUser.username && <span className="rightbarInfoValue">{user.relationship === 1 ? "Single" : user.relationship === 1 ? "Married" : "-"}</span>} */}
            </div>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="">
        <ProfileRightbar />
      </div>
    </div>
  );
}
