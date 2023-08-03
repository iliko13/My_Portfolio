import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: " #fff", marginRight: "2rem" }} />
            <div>
              <p>14 Tavdadebuli.</p>
              <p>Tbilisi</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: " #fff", marginRight: "2rem" }}
              />
              +995-557-214-154
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: " #fff", marginRight: "2rem" }}
              />
              ilikokukava13@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <p>
            My name is Iliko. Here is another contact details. If you have anu
            questions send me a message and i will answer to your questions in
            24 hours.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: " #fff", marginRight: "1rem" }}
              role="link"
              onClick={() =>
                openInNewTab("https://www.facebook.com/ilia.kukava.7/")
              }
              onMouseOver={({ target }) =>
                (target.style.color = `rgb(53, 101, 204)`)
              }
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
            <FaTwitter
              size={30}
              style={{ color: " #fff", marginRight: "1rem" }}
              role="link"
              onMouseOver={({ target }) =>
                (target.style.color = `rgb(70, 138, 183))`)
              }
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
            <FaLinkedin
              size={30}
              style={{ color: " #fff", marginRight: "1rem" }}
              role="link"
              onClick={() =>
                openInNewTab(
                  "https://www.linkedin.com/in/ilia-kukava-4a487925a/"
                )
              }
              onMouseOver={({ target }) =>
                (target.style.color = `rgb(53, 101, 204)`)
              }
              onMouseOut={({ target }) => (target.style.color = "white")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
