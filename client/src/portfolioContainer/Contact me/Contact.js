
import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import './Contact.css';
import Typical from "react-typical";

const SERVICE_ID = "service_j9us96p";
const TEMPLATE_ID = "template_zv9s2vr";
const PUBLIC_KEY = "vF4yPlyqz1ByYq2Id";

const Contact = () => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };


  return (
    
    <div className="container-fluid">
    <div id="contact" className="contact" name="contact">
    <h2  style={{fontSize: "3rem", marginTop:"4rem"}}>Feel Free to Contact me</h2>
    <hr style={{ marginBottom:"4rem"}}/>
   <div className="para">
   
   
    <p>
            <h3>
            {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    " Have project In Mind",
                    2000,
                    "Get in touch",
                    2000, ]}
                /> </h3>
            <strong>Gmail: 786mussratshaheen@gmail.com</strong>
            <br />
            
                  <strong>Phone: +92495700229</strong>
                </p>
    </div>

    <div className="contact">
    
      <Form onSubmit={handleOnSubmit}>


    
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='Email'
          name='user_email'
          placeholder='Email…'
          required
          icon='mail'
          iconPosition='left'
        />
        <Form.Field
          id='form-input-control-last-name'
          control={Input}
          label='Name'
          name='user_name'
          placeholder='Name…'
          required
          icon='user circle'
          iconPosition='left'
        />
        <Form.Field
          id='form-textarea-control-opinion'
          control={TextArea}
          label='Message'
          name='user_message'
          placeholder='Message…'
          required
        />
        <Button type='submit' color='green'>Submit</Button>
      </Form>
     
           
    </div>
    </div>
    </div>
  );
}

export default Contact;