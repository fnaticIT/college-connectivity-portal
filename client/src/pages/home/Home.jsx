import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";

import "./home.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";


export default function Home() {
  const { user } = useContext(AuthContext);
  
 
  return (
    <>
    <div className="mainclubs">
      <div className="">
      <Topbar />
      </div>
      <div className="">
      <div className="homeContainer">
        <Sidebar user={user} />
        <Feed />
        </div>
      </div>
      
      </div>
    </>
  );
}
