
import "../style/style.css";

function ResumeButton(){
    return <>
        <div className="col-md-12 d-flex mx-auto py-2">
          <a href="/Ammrisha_Chowdhury_Resume.pdf" download > <button className="btn btn-purple">Download My Resume</button></a> 
            <button className="btn btn-purple">Contact Me</button>
        </div>
        
    </>
}

export default ResumeButton ;