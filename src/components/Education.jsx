// components/Education.jsx
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Education({ education }) {
  return (
    <div className="container">
      <h2 className='heading'><FontAwesomeIcon icon={faUserGraduate} /> Education</h2>
      {education.map((item, index) => (
        <div className="row my-5 d-flex align-items-center" key={index}>
            <div className=" col-md-2 col-2">
                    <img className="edu-img-resp" src={item.logo} alt="" style={{ width: "60%",}} />
            </div>
            <div className="col-sm-8 col-md-8">
                <h2 className='card-heading'>{item.degree}</h2>
            <h4 style={{color:'#586069'}}>{item.institution}</h4> 
            <h4> {item.year}</h4>
            <h5 style={{color:'#586069'}}>{item.cgpa}</h5>
            
            </div>
         
        </div>
      ))}
    </div>
  );
}

export default Education;
