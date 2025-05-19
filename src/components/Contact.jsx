import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCodeCompare } from '@fortawesome/free-solid-svg-icons';
function Contact(){
    return <>
        <div className="container my-5 mx-auto justify-content-center align-items-center">
            <div className="row card-box-shadow mx-auto">
                <h2 className='heading'><FontAwesomeIcon icon={faAddressBook} size="" />    Contact with me</h2>
                <div className="contact-resp col-md-5 col-sm-12  mx-2 my-5 " style={{backgroundColor : "white" , color:"rgb(45 94 89)" , fontSize:"20px" }}>
                
                        <strong>  <FontAwesomeIcon icon={faEnvelope} />  Email : ammrishachowdhury821@gmail.com </strong> 
                    <br />
                    <br />
                    <strong>  <FontAwesomeIcon icon={faPhoneVolume} />  Phone No . : 9875346623</strong>
                    <br />
                     <br />
                    <strong> <FontAwesomeIcon icon={faWhatsapp} /> Whatsapp No. : 9088657648</strong>
                    <br />
                </div>
                <div className="contact-resp-down col-md-6 col-sm-12 my-2 p-5 mx-2  justify-content-center align-items-center" >
                        <img src="/contact_form.png" alt="" style={{width: '100%'}} />
                </div>
               
            </div>
        </div>
    </>
}

export default Contact ;