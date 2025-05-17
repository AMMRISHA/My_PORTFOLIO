// components/Education.jsx
import '../style/style.css';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
function Project({ projectdetails}) {
  return (
    <div className='container'>
            <div className="d-flex justify-content-between">
                    <div className="col-md-4">
                        <h2 className='heading'> <FontAwesomeIcon icon={faListCheck} />  Projects</h2>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                      <a href="https://github.com/AMMRISHA" target="_blank"> <button className="btn btn-purple">See More Projects</button></a>
                    </div>
            
                
            </div>
      
      <div className="row d-flex">
      { projectdetails.map((item, index) => (
      
 
            <div className="col-sm-new-12 card-box-shadow mx-auto my-3 pt-5" key={index}>
                <a className=' text-black' href={item.link} target="_blank">
                    <div className="span-div" style={{backgroundColor : '#4c2412'}}>
                                          <div className="cirle">
                                             <span style={{color : '#4c2412'}}> <FontAwesomeIcon icon={faCodeCompare}  size="2x"  /></span>
                                          </div>
                    </div>
                    <h4 className='card-heading text-center my-4'>{item.name}</h4>
                    <h6>{item.title}</h6>
                
                </a>
            </div>
        
      ))}

      </div>
    </div>
  );
}

export default Project;
