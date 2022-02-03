import React, {useState} from "react";
import "./style.css";
import Axios from "axios";

const Footer = () => {

  const [sent, setSent] = useState(false)
  const [text, setText] = useState("")

  const handleSend = async() => {
      setSent(true)
      try{
          await Axios.post("http://localhost:5000/send_mail", {text})
      } catch (error) {
          console.log(error)
              
          }
      }


  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Hugo Silva</h1>
        <p>Based in Lisbon</p>
      </div>



      {/* <div className="footer-sns">
        <div className="design-by">Design By Hugo Silva</div>
        <div className="sns-links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <i className="fab fa-facebook facebook"></i>
          </a>
        </div>
      </div> */}
    </footer>
  );
};

export default Footer;


