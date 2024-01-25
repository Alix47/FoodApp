import { GITHUB_LINK, GMAIL_LINK, LINKEDIN_LINK } from "../constants";
import { SiGithub, SiLinkedin, SiGoogle } from "react-icons/si";
import photo from "../../assets/ALI.jpg"
import "../utils/about.css"
import { BsTwitterX } from "react-icons/bs";

const About = () => {
  return (
   <div className="p-10">
    <div className="image">
      <img src={photo} alt="" id="photo"/>
    </div>
    <div className="info">
      <div>
          <div id="name">ALI KHAN</div>
          <div id="profession">Software Developer</div>
          <div className="buttons">
              <button id="email"><a href="https://portfolio-alikhan.vercel.app/" target="#">Portfolio</a></button>
              <button id="linkedin"><a href="https://www.linkedin.com/in/ali-khan-17a42986" target="#">LinkedIn</a></button>
          </div>
      </div>
      <div className="content">
          <h4>About</h4>
          <p>Ali is a passionate developer and aspiring engineer, specializing in electronics. He uses frontend tools to bring a unique blend of creativity and technical expertise to the world of web development.</p>
          <h4 >Interests</h4>
          <p>Football freak. Music scholar. Chess newbie. Reader. Internet fanatic. Travel geek. Chai fanatic.</p>
      </div>
    </div>
      <div className="footer">
        <div className="icon-footer">
        <a className="icon-x" href="https://twitter.com/AliKhan388310" target="#"><BsTwitterX /></a>
        <a className="icon-git" href="https://github.com/Alix47" target="#"><SiGithub /></a>
        </div>
      </div>
    </div>
  );
};

export default About;