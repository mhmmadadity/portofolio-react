import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import call_icon from '../../assets/call_icon.svg';

const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        
        const name = formData.get('name').trim();
        const email = formData.get('email').trim();
        const message = formData.get('massage').trim();
    
        if (!name || !email || !message) {
          alert("All fields are required.");
          return;
        }
    
        formData.append("access_key", "5d49a169-6c37-4b44-88a3-63a0e98132f0");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        } else {
          alert("Failed to submit the form.");
        }
      };

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Lets Talk</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div className="contact-details">
                    <div className="contact-detail">
                        <img src={mail_icon} alt="" /><p>2022610024.aditya@itp.ac.id</p>
                    </div>
                    <div className="contact-detail">
                        <img src={call_icon} alt="" /><p>+627766751025</p>
                    </div>
                    <div className="contact-detail">
                        <img src={location_icon} alt="" /><p>Padang, West Sumatra</p>
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit}  className='contact-right'>
                <label htmlFor="text">Your  Name</label>
                <input type="text" placeholder='Enter Your Name' name='name'/>
                <label htmlFor="email">Your Email</label>
                <input type="email" placeholder='Enter Your Email' name='email'/>
                <label htmlFor="massage">Write Your Massage Here</label>
                <textarea name="massage" rows="8" placeholder='Enter Your Massage'></textarea>
                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact