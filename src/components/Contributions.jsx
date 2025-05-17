import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Contributions({contribute}){
    return <>
    <div className="container  my-5">
        <div className="row my-5 col-12">
            <h2 className="heading "><FontAwesomeIcon icon={faCode} /> Contributions</h2>
            {contribute.map((item , index)=>(
                <div className="col-sm-new-12 card-box-shadow mx-auto pt-5" key={index}>
                   <div className="span-div">
                        <div className="cirle">
                           <span> <FontAwesomeIcon icon={faCode}  size="2x"  /></span>
                        </div>
                   </div>
                    <h2 className='card-heading text-center my-4' style={{ listStyle: "none"}}>{item.project}</h2>
                    <ul className='d-flex flex-column align-items-left p-4'>
                        {item.task && item.task.slice(0, 2).map((t, idx) => (
                            <li className='text-left' key={idx}>{t}</li>
                        ))}
                    </ul>
                 

                </div>
            ))}
        </div>
    </div>
    
    </>
}

export default Contributions;