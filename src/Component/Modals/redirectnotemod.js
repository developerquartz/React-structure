import React,{useEffect} from "react";
import Modal from "react-bootstrap/Modal";

export default function Redirectnotemod(props) {

  useEffect(() => { 
    setTimeout(() => {
      window.location.replace('https://lat-ahlein.suffescom.dev/')
      props.onhide && props.onhide();
    }, 3000);
  }, [])
  
  return (
    <Modal
      {...props}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="redirect_mod"
    >
      <Modal.Body>
        <div className="redirect_Mode text-center">
          <h4>Please Note</h4>
          <hr />
          we are redirecting you to <strong>Ahlein</strong> special website. Set
          your belt to travel through a luxurious experience.
        </div>
      </Modal.Body>
    </Modal>
  );
}
