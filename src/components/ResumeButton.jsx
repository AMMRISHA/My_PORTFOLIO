
import "../style/style.css";

function ResumeButton(){
    return <>
        <div className="col-md-12 d-flex mx-auto py-2 btn-resp">
          <a href="/Ammrisha_Chowdhury_Resume.pdf" download > <button className="btn btn-purple">Download My Resume</button></a> 
          <a href="#contact">  <button className="btn btn-purple">Contact Me</button></a>
        </div>
        
    </>
}

export default ResumeButton ;