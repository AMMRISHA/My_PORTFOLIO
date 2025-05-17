import '../style/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


function Contributions({contribute}){
    return <>
    <div className="container  my-5">
        <div className="row my-5 col-12">
            <h2 className="heading text-center"><FontAwesomeIcon icon={faCode} /> Contributions</h2>
            {contribute.map((item , index)=>(
                <div className="col-sm-12 col-md-4 card-box-shadow my-2" key={index}>
                   
                    <h2 className='card-heading'>{item.project}</h2>
                     <ul>
                        {item.task && item.task.map((t, idx) => (
                            <li key={idx}>{t}</li>
                        ))}
                        </ul>
                 

                </div>
            ))}
        </div>
    </div>
    
    </>
}

export default Contributions;