import React, { useRef } from "react";
import emailjs from "emailjs-com";
import Navbars from "../Navbar/Navbar";
export default function Contact(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_4tsd069", "template_boygw1t", form.current, "user_u8odb2oxLi7U0bJf1GSnF").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    ); 
 window.alert("Email sent")
  };

  return (
      <div className="homex">
      <Navbars />
      <div className="forms">
    <form ref={form} onSubmit={sendEmail} className="fnew">
    <h3 style={{ color: "white" }}>Share your Feedback and Queries</h3>
      <h4>Name</h4>
      <input type="text" name="user_name" className="i sp"/>
      <h4>Email</h4>
      <input type="email" name="user_email" className="i sp"/>
      <h4>Message</h4>
      <textarea name="message" className="i sp" />
      <input type="submit" value="Send" className="b bnew"/>
    </form>
    </div>
</div>

  );
};

