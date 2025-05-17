import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBuilding} from '@fortawesome/free-solid-svg-icons';
import { faBook} from '@fortawesome/free-solid-svg-icons';

import '../style/style.css';

function Experience({experience }){
    return <>
        <div className="container">
                <div className=" d-flex justify-content-between">
                    <div className="col-md-4">
                        <h2 className='heading'> <FontAwesomeIcon icon={faBuilding}  />   Experience</h2>
                    </div>
                    <div className="col-md-4 d-flex justify-content-end">
                        <button className="btn btn-purple">See More Details </button>
                    </div>
        
            
                </div>
      
            <div className="row d-flex">
           {experience.map((item , index)=>(
                <div className=" blog-card col-md-4 my-2 mx-2 card-box-shadow position-relative" key={index}>
                  
                    <div className="go-corner"><div class="go-arrow">→</div> </div>
                        <h4 className='card-heading-2 my-4'> <FontAwesomeIcon icon={faBook} /> {item.company}</h4>
                        <h2 className='middle-heading'>{item.profile}</h2>
                        <p>{item.startdate}-{item.enddate}</p>
                  
                </div>
           ))} 
        </div>
        </div>
    </>
}

export default Experience;