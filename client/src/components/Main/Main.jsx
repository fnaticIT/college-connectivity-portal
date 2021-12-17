import React from "react";
import { useContext } from "react";
import "./Main.css";
import { Link } from "react-router-dom";
import Navbars from "../Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import video from "../../images/video.mp4";
function Main() {
  const { user } = useContext(AuthContext);
  return (
    <div className="homex">
      <video className="videoTag" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className="topx">
        <Navbars />

        {user.isClub && <div className="cc">For Clubs</div>}
      </div>

      <div className="middle">
        {!user.isClub ? (
          <Link to="/interview" className="link">
            <div className="grid object">
              <span className="g1">Interview Corner</span>
            </div>
          </Link>
        ) : (
          <Link to="/events" className="link">
            <div className="grid g2 object">
              <span className="g1">Manage Events</span>
            </div>
          </Link>
        )}
        {!user.isClub ? (
          <Link to="/allclubs" className="link">
            <div className="grid g2 object">
              <span className="g1">Clubs on Roll</span>
            </div>
          </Link>
        ) : (
          <Link to={`/profile/${user.username}`} className="link">
            <div className="grid g2 object">
              <span className="g1">Manage Club</span>
            </div>
          </Link>
        )}
        <Link to="/social" className="link">
          <div className="grid g3 object">
            <span className="g1">Social corner</span>
          </div>
        </Link>
      </div>
      <div className="footer">
        <p className="foo">Copyright © 2021 NITW Connect</p>
      </div>
    </div>
  );
}

export default Main;

// import React, { useEffect } from "react";
// import { useContext } from "react";
// import "./Main.css";
// import { Link } from "react-router-dom";
// import Navbars from "../Navbar/Navbar";
// import { AuthContext } from "../../context/AuthContext";
// //import video from "../../images/video.mp4";
// import video_1 from "../../images/video_2.mp4";
// //import video_1 from "../../images/Untitled.mp4" ;
// import sound from "../../images/sound.mp3";
// function Main() {
//   const { user } = useContext(AuthContext);
//   function playAudio() {
//     const audioEl = document.getElementsByClassName("audio-element")[0];
//     audioEl.play();
//   }
//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     playAudio();
//   //   }, 1000);

//   //   return () => clearInterval(interval);
//   // }, []);
//   return (
//     <div className="homex">
//       <video className="videoTag" autoPlay loop muted>
//         <source src={video_1} type="video/mp4" />
//       </video>
//       <div className="topx">
//         <Navbars />

//         {user.isClub && <div className="cc ">For Clubs</div>}
//       </div>

//       <div className="middle">
//         {!user.isClub ? (
//           <Link to="/interview" className="link" onMouseEnter={playAudio}>
//             <div class="spacer"></div>
//             <div class="anim-box">
//               <div></div>
//               <div class="scanner"></div>
//               <div style={{ textTransform: "capitalize", fontSize: 30, color: "white" }}>Interview Corner</div>
//             </div>
//             <div class="spacer"></div>
//           </Link>
//         ) : (
//           <Link to="/events" className="link" onMouseEnter={playAudio}>
//             <div class="spacer"></div>
//             <div class="anim-box">
//               <div></div>
//               <div class="scanner"></div>
//               <div style={{ textTransform: "capitalize", fontSize: 30, color: "white" }}>Manage Events</div>
//             </div>
//             <div class="spacer"></div>
//           </Link>
//         )}
//         {!user.isClub ? (
//           <Link to="/allclubs" className="link" onMouseEnter={playAudio}>
//             <div class="spacer"></div>
//             <div class="anim-box">
//               <div></div>
//               <div class="scanner"></div>
//               <div style={{ textTransform: "capitalize", fontSize: 30, color: "white" }}>Clubs On Roll</div>
//             </div>
//             <div class="spacer"></div>
//           </Link>
//         ) : (
//           <Link to={`/profile/${user.username}`} className="link" onMouseEnter={playAudio}>
//             <div class="spacer"></div>
//             <div class="anim-box">
//               <div></div>
//               <div class="scanner"></div>
//               <div style={{ textTransform: "capitalize", fontSize: 30, color: "white" }}>Manage Club</div>
//             </div>
//             <div class="spacer"></div>
//           </Link>
//         )}
//         <Link to="/social" className="link" onMouseEnter={playAudio}>
//           <div class="spacer"></div>
//           <div class="anim-box">
//             <div></div>
//             <div class="scanner"></div>
//             <div style={{ textTransform: "capitalize", fontSize: 30, color: "white" }}>Social Corner</div>
//           </div>
//           <div class="spacer"></div>
//         </Link>
//       </div>

//       <audio className="audio-element">
//         <source src={sound}></source>
//       </audio>
//       <div className="footer">
//         {/* <p className="foo">From NITW for NITW !</p> */}

//         <p className="foo">© Fnatic 2021</p>
//       </div>
//     </div>
//   );
// }

// export default Main;
