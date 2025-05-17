

import {faCode} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
 import '../style/style.css';

function Navbar(){
    return <>
        <div className=" d-flex  pt-4 bg-white mx-auto header w-100">
            <a href="">
                <div className="logo-name" style={{ fontFamily: "'Dancing Script', cursive" }}>
                 <FontAwesomeIcon icon={faCode} />   Ammrisha Chowdhury <FontAwesomeIcon icon={faCode} />
                </div>
            </a>
            <ul className="d-flex justify-content-between align-items-center w-100  " style={{listStyle : 'none'}}>
                <li>work</li>
                <li>Proficiency</li>
                <li>Education</li>
                <li>Experience</li>
                <li>Projects</li>
                <li>Contributions</li>
           
            </ul>
        </div>
    </>
}

export default Navbar;