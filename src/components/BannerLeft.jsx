import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import SocialMediaLogo from "./SocialMediaLogo";
import ResumeButton from "./ResumeButton";
import { Button } from "bootstrap";

function BannerLeft(){
    return <>
        <div className="banner-left-resp justify-content-center align-items-center mx-auto col-md-8 py-2 my-5">
             <h1 className="banner-heading">Hi , I'm Ammrisha</h1>
             <p className="banner-para">A passionate Full Stack Software Developer  <br /> 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.</p>
             <SocialMediaLogo />
             <ResumeButton/>
        </div>
    </>
}

export default BannerLeft;