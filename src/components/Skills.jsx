import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode} from '@fortawesome/free-solid-svg-icons';
import { faCodeMerge } from '@fortawesome/free-solid-svg-icons';


function Skills({skills}){
    return <>
    <div className="container my-5">
     
      <div className="row my-5 col-12">
         <h2 className="heading "><FontAwesomeIcon icon={faCode} /> Skills</h2>
                   
        {skills.map((skill, index) => (
          <div className="col-sm-new-12 card-box-shadow mx-auto my-3 pt-5" key={index}>
             <div className="span-div  ">
                        <div className="cirle">
                           <span> <FontAwesomeIcon icon={faCodeMerge}  size="2x"  /></span>
                        </div>
                   </div>
      
              <h5 className="card-heading text-center my-4">{skill.category}</h5>
              <ul className="d-flex flex-column align-items-left p-4"  style={{ listStyle: "none"}}>
                {skill.technologies.map((tech, idx) => (
                  <li key={idx}> • {tech}</li>
                ))}
              </ul>
           
          </div>
        ))}
      </div>
    </div>
    </>
}

export default Skills ;