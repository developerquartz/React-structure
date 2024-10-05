import React from 'react'
import { Button, Container } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {Fade} from "react-reveal"

const Pagenotfound = () => {
    const navigate = useNavigate();

    
  return (
    <section className='errorpage'>
      <Container>
         <Fade bottom>
          <div className="erro404page">
               <div className="jet_img">
                 <img src="./images/jet.png" alt="" className='img-fluid'/>
               </div>
               <h1 className='text-white'>Page Not Found</h1>
               <p>The requested page could not be found on this server. Please check the URL for errors or navigate to the homepage.</p>
               <Button className="back_to_home" onClick={() => navigate("/")}>Back to homepage</Button>
          </div>
          </Fade>
      </Container>    
    </section>
  )
}

export default Pagenotfound