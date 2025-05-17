// components/Education.jsx
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Education({ education }) {
  return (
    <div className="container">
      <h2 className='heading'><FontAwesomeIcon icon={faUserGraduate} /> Education</h2>
      {education.map((item, index) => (
        <div className="row my-5 d-flex align-items-center" key={index}>
            <div className="col-sm-4 col-md-2 col-1">
                    <img src={item.logo} alt="" style={{ width: "100%",}} />
            </div>
            <div className="col-sm-8 col-md-8">
                <h4 className='card-heading'>{item.institution}</h4>
            <h6>{item.degree} — {item.year}</h6>
            
            </div>
         
        </div>
      ))}
    </div>
  );
}

export default Education;
