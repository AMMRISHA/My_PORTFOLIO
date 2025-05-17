import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
function Contact(){
    return <>
        <div className="container my-5">
            <div className="row">
                <h2 className='heading'><FontAwesomeIcon icon={faAddressBook} size="" />    Contact with me</h2>
                <div className="col-md-6">
                    <br />
                        <strong> Email :ammrishachowdhury821@gmail.com </strong> 
                    <br />

                </div>
                <div className="col-md-6">
                    <br />
                    <strong>Phine No . : 9875346623</strong>
                    <br />
                </div>
                <div className="col-md-6">
                    <br />
                    <strong>Whatsapp No. : 9088657648</strong>
                </div>
            </div>
        </div>
    </>
}

export default Contact ;