import { faCode } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../style/style.css';

function Navbar() {
    return (
        <nav className=" nav-resp d-flex  navbar navbar-expand-md bg-white  px-1 p-5">
            <div className="container-fluid">
                <a className="navbar-brand d-flex align-items-center" href="#" style={{ fontFamily: "'Dancing Script', cursive" , color:"#311a55" , fontWeight:"bold" , fontSize:'25px' }}>
                    <FontAwesomeIcon icon={faCode} className="me-2" />
                    Ammrisha Chowdhury
                    <FontAwesomeIcon icon={faCode} className="ms-2" />

                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" style={{border: 'none',fontSize: '15px',fontWeight: 'bold'}}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav text-center" style={{ listStyle: 'none' }}>
                        <li className="nav-item"><a href="#knowledge" className="nav-link text-black">Work</a></li>
                        <li className="nav-item"><a href="#proficiency" className="nav-link text-black">Proficiency</a></li>
                        <li className="nav-item"><a href="#education" className="nav-link text-black">Education</a></li>
                        <li className="nav-item"><a href="#experience" className="nav-link text-black">Experience</a></li>
                        <li className="nav-item"><a href="#projects" className="nav-link text-black">Projects</a></li>
                        <li className="nav-item"><a href="#contributions" className="nav-link text-black">Contributions</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
