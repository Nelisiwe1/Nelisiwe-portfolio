import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const form = useRef();
  const [captchaValue, setCaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the captcha.");
      return;
    }

    emailjs.sendForm('service_qyadbdk', 'template_3yudpgu', form.current, 'user_Lefj3CzsKkK73JmCp')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{backgroundImage: 'url("c-back.jpg")'}}>
      <div className="bg-black bg-opacity-50 h-full flex flex-col justify-center items-center">
        <h1 className='text-center font-bold text-5xl text-white mb-8'>Contact</h1>
        <div className="contact-container flex flex-col md:flex-row">
          <div className="contact mb-6 md:mb-0 md:mr-6" id="contact">
            <div className="icons">
              <div className="container mx-0">
                <div className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <i className="fas fa-envelope mr-2"></i>
                    <div>
                      <img src="message.png" alt="" className="w-8 h-8 mr-2" />
                      <h3 className="text-lg font-semibold text-white">my email</h3>
                      <p className="text-gray-600">nelisiwengqeme3@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center mb-4">
                    <i className="fas fa-phone mr-2"></i>
                    <div>
                      <img src="phone.png" alt="" className="w-8 h-8 mr-2" />
                      <h3 className="text-lg font-semibold text-white">my number</h3>
                      <p className="text-gray-600">+27 69 422 6621</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-map-marker-alt mr-2"></i>
                    <div>
                      <img src="location.png" alt="" className="w-8 h-8 mr-2" />
                      <h3 className="text-lg font-semibold text-white">my address</h3>
                      <p className="text-gray-600">1941 Bhele Street, Daveyton 1520</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form ref={form} onSubmit={sendEmail} className="max-w-md mx-auto p-6 rounded-lg shadow-md b_glow flex-grow h-auto w-full">
            <h2 className='text-center font-bold text-2xl text-black'>Send Message</h2>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
              <input type="text" id="name" name="user_name" placeholder="Enter your name" className="box-input" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
              <input type="email" id="email" name="user_email" placeholder="Enter your email" className="box-input" />
            </div>
            <div className="mb-4">
              <label htmlFor="number" className="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
              <input type="tel" id="number" name="phone_number" placeholder="Enter your phone number" className="box-input" />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">Message</label>
              <textarea id="message" name="message" placeholder="Enter your message" rows="3" className="box-textarea"></textarea>
            </div>
            <div className="flex items-center justify-center">
              <ReCAPTCHA
                sitekey="6Lcg8nspAAAAAMdtOXasOupeYjTDaqx4NviFXCZG"
                onChange={handleCaptchaChange}
              />
              <button type="submit" className="btn" style={{ backgroundColor: '#FFA500', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' }}>Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
