
import emailjs from '@emailjs/browser';

import React, { useRef,useState } from 'react';
import tank from "../ProductsImages/tank (1).png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

function ContactSection () {


  const form = useRef();

  const [user_name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [user_email, setEmail] = useState('');
  const[emailError,setEmailError]=useState('');

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (!user_email) {
      setEmailError('Please enter a valid email (mandatory).');
      return;
    } else if (!validateEmail(user_email)) {
      setEmailError('Please enter a valid email (mandatory).');
      return;
    }
    setEmailError(''); // Clear error if email is valid
   emailjs.send("service_3cz3tcq","template_gihgeus", form.current, {
        publicKey: '0nuspUfBX73EXUQ8l',
      })
      .then(() => {
        // Show success toast
        toast.success('Message sent successfully!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
   const formData = new FormData(form.current);      console.log(Object.fromEntries(formData.entries()));
      })
      .catch(() => {
        // Show error toast
        
        toast.error('Message not sent, please try again!', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .finally(() => {
        // Always reset the form after submission
        setName('');
        setMessage('');
        setEmail('');
        setEmailError('');

      },
            (error) => {
        toast.error(`Failed to send: ${error.text}`, {
          position: 'top-center'
        });
      }

    );
  };
    return (
      <section id="contact" className="contact py-5 " >
        <div className="container">
          <h3 className="text-center mb-4">Contact Us</h3>
          <div className="row">
            
            
            <div className="col-md-6 mb-8 contactC">
              <h5 className='mb-4'>Get In Touch</h5>
              <form 
              ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
               
                  <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="user_name"
                  placeholder="Enter your name"
                  value={user_name}
                  onChange={(e) => setName(e.target.value)} 
                  // onFocus={(e) => e.target.style.border = '2px solid #4CAF50'}
                  required
                />
                </div>
                <div className="mb-3">
                  <label htmlFor="Email" className="form-label">Email</label>
                  <input
                  type="text"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  name="user_email"
                  value={user_email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                  {emailError && <small className="text-danger">{emailError}</small>}
                </div>
             
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                  className="form-control"
                  id="message"
                  rows="4"
                  placeholder="Enter your message"
                   name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
                <div className="text-end">
                <button type="submit" 
                className="btn btn-primary">Send Message
                  </button>
                  </div>
            </form>
              {/* <form ref={form} onSubmit={sendEmail}>
    *<label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
            </div>
            <div className="col-md-6 contactC mb-8 " >
              <h5 className="text-left mb-4">Our Address</h5>
              
              <p className='mb-5'> <i className="fas fa-map-marker-alt"></i> : 5987, Loft, New Dhobi Ghat, Capt. Prakash Peth Marg, Cuffe Parade, Mumbai-400005</p>
              <p className='mb-5'>   <i className="fas fa-phone-alt"></i> : <a href="tel:+919769900999" className="phone-link">
          +91-9769900999
          </a></p>
          
              <p className='mb-5'><i className="fas fa-envelope"></i> : <a href="mailto:sagarchemical9@gmail.com" className="phone-link">
              sagarchemical9@gmail.com
          </a></p>
             
           
           
            </div>
          </div>
        </div>
   <br />
   <br/>

        <div className="container contactC">
          <div className="row">
         
            <div className="col-md-6 contactC ">
            <img src={tank} alt='tank'/>
              
           </div>
           <div className="col-md-6 contactC">
             
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.3856189688736!2d72.8197581!3d18.910368899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d10d6a86cb91%3A0xc35773569a6d1d22!2sSagar%20chemicals!5e1!3m2!1sen!2sin!4v1748975182342!5m2!1sen!2sin" width="100%" height="400"   style={{ border: 0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps" 
             >
              </iframe>          
             {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30163.004741689532!2d72.89115785645293!3d19.09117193863037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8748e256769%3A0x20d71a107571c813!2sM.R.%20Chemical%20Corporation!5e0!3m2!1sen!2sin!4v1737362680600!5m2!1sen!2sin" width="100%" height="400"   style={{ border: 0 }}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                title="Google Maps" 
             >
             </iframe>    */}
           
             </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    );
  };
  export default ContactSection;
  