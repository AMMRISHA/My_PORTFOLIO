// components/Education.jsx
import '../style/style.css';
import { faListCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Project({ projectdetails}) {
  return (
    <div className='container'>
      <div className="d-flex justify-content-between">
        <div className="col-md-4">
            <h2 className='heading'> <FontAwesomeIcon icon={faListCheck} />  Projects</h2>
        </div>
         <div className="col-md-4 d-flex justify-content-right">
           <a href="https://github.com/AMMRISHA" target="_blank"> <button className="btn btn-purple">See More Projects</button></a>
        </div>
       
          
      </div>
      
      <div className="row d-flex my-5">
      { projectdetails.map((item, index) => (
      

       
         
        <div className="col-sm-12  col-md-4  my-2" key={index}>
            <a href={item.link} target="_blank">
                <div className="">
                    <div className=" card-box-shadow">
                        <h4 className='card-heading'>{item.name}</h4>
                        <h6>{item.title}</h6>
                        
                    </div>
                </div>
            </a>
        </div>
         

      
       
      ))}

      </div>
    </div>
  );
}

export default Project;
