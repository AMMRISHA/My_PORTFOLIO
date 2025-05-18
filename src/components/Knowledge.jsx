import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faJs } from '@fortawesome/free-brands-svg-icons';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faNodeJs } from '@fortawesome/free-brands-svg-icons';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faPhp} from '@fortawesome/free-brands-svg-icons';
import { faLaravel} from '@fortawesome/free-brands-svg-icons';
import { faDatabase} from '@fortawesome/free-solid-svg-icons';
import { faPython} from '@fortawesome/free-brands-svg-icons';
import { faC} from '@fortawesome/free-solid-svg-icons';
import { faJava} from '@fortawesome/free-brands-svg-icons';
import { faNpm} from '@fortawesome/free-brands-svg-icons';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faGit} from '@fortawesome/free-brands-svg-icons';
import { faBarsProgress} from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';

function Knowledge(){
     useEffect(() => {
        AOS.init({
          duration: 1000, // animation duration
          once: true      // only animate once
        });
      }, []);
    return <>
     <div className="  container mx-auto ">
        <div className="knowledge-resp row d-flex">
            <div className="fade-right-resp your-element-class col-md-6" data-aos="fade-right">
                 <video
            src="/coding.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{ width: "70%", height: "auto" }}
          />
            </div>
            <div className="col-md-6  your-element-class" data-aos="fade-left">
                <h1 className="heading"><FontAwesomeIcon icon={faBarsProgress} />   What I Do</h1>
                <p className="banner-para">Code. Learn. Innovate. Repeat. – Full Stack Developer on a Mission</p>
                <div className="row kno-row-resp d-flex flex-wrap justify-content-left align-items-center text-secondary ">
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faHtml5} size="2x" />
                        <p>Html-5</p>
                    </div>
                     <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faCss3Alt} size="2x" />
                        <p>Css</p>
                    </div>
                     <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faJs} size="2x" />
                        <p>Javascript</p>
                    </div>
                     <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faReact} size="2x" />
                        <p>React</p>
                    </div>
                     <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faNodeJs} size="2x" />
                        <p>Node</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faBootstrap} size="2x" />
                        <p>Bootstrap</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faPhp} size="2x" />
                        <p>Php</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faLaravel} size="2x" />
                        <p>Laravel</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faDatabase} size="2x" />
                        <p>Sql-Database</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faPython} size="2x" />
                        <p>Python</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faC} size="2x" />
                        <p>C/C++</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faJava} size="2x" />
                        <p>Java</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faNpm} size="2x" />
                        <p>Npm</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                        <p> Github</p>
                    </div>
                    <div className="kno-col-resp col-md-2 justify-content-center align-items-center text-center">
                        <FontAwesomeIcon icon={faGit} size="2x" />
                        <p>Git</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
}
export default Knowledge;