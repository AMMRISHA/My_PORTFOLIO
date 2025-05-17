import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
function Contact(){
    return <>
        <div className="container my-5">
            <div className="row">
                <h2 className='heading'><FontAwesomeIcon icon={faAddressBook} size="" />    Contact with me</h2>
                <div className="col-md-5 col-sm-12 card-box-shadow mx-2 my-5 p-5" style={{backgroundColor : "#311a55" , color:"white" , fontSize:"20px" }}>
                
                        <strong>  <FontAwesomeIcon icon={faEnvelope} />  Email :ammrishachowdhury821@gmail.com </strong> 
                    <br />
                    <br />
                    <strong>  <FontAwesomeIcon icon={faPhoneVolume} />  Phone No . : 9875346623</strong>
                    <br />
                     <br />
                    <strong> <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp No. : 9088657648</strong>
                    <br />
                </div>
                <div className="col-md-5 col-sm-12 card-box-shadow my-2 p-5 mx-2" >
                         <div className="span-div" >
                                                                  <div className="cirle">
                                                                     <span> <FontAwesomeIcon icon={faCodeCompare}  size="2x"  /></span>
                                                                  </div>
                                            </div>
                </div>
               
            </div>
        </div>
    </>
}

export default Contact ;