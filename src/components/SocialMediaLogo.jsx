

import "../style/style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function SocialMediaLogo(){
    return <>
       
             <div className="d-flex gap-3 pt-4 my-3 logo-div ">
                <a className="a-purple" href="https://github.com/AMMRISHA" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a className="a-purple" href="https://www.linkedin.com/in/ammrisha-chowdhury/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a className="a-purple" href="mailto:ammrishaxxxxxx@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
            </div>
       
    </>
}

export default SocialMediaLogo;