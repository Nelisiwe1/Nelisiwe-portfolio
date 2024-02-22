import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qyadbdk', 'template_3yudpgu', form.current, 'Lefj3CzsKkK73JmCp')
      .then((result) => {
        console.log(result.text)
      }, (error) => {
        console.log(error.text)
      });
  };

  return (
    <div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{backgroundImage: 'url("c-back.jpg")'}}>
      <div className="bg-black bg-opacity-50 h-full flex justify-center">
        <h1 className='text-center font-bold text-5xl'>Contact</h1>
     <div className="contact" id="contact">
          <div className="row">


<div className="contact-container">
    <div class="icons">

      {/*------------------------------------------------------------*/}
      <div class="container mx-0">
    <div class="flex flex-col">
        <div class="flex items-center mb-4">
            <i class="fas fa-envelope mr-2"></i>
            <div>
                <img src="message.png" alt="" class="w-8 h-8 mr-2" />
                <h3 class="text-lg font-semibold">my email</h3>
                <p class="text-gray-600">nelisiwengqeme3@gmail.com</p>
            </div>
        </div>
        <div class="flex items-center mb-4">
            <i class="fas fa-phone mr-2"></i>
            <div>
                <img src="phone.png" alt="" class="w-8 h-8 mr-2" />
                <h3 class="text-lg font-semibold">my number</h3>
                <p class="text-gray-600">+27 69 422 6621</p>
            </div>
        </div>
        <div class="flex items-center">
            <i class="fas fa-map-marker-alt mr-2"></i>
            <div>
                <img src="location.png" alt="" class="w-8 h-8 mr-2" />
                <h3 class="text-lg font-semibold">my address</h3>
                <p class="text-gray-600">1941 Bhele Street, Daveyton 1520</p>
            </div>
        </div>
    </div>
</div>


        {/*------------------------------------------------------------------------------------*/}
    </div>
</div>

  

  <form ref={form} onSubmit={sendEmail} className="max-w-5xl mx-auto p-6 bg-white-500 rounded-lg shadow-md b_glow" style={{ marginLeft: '50px' }}>
    <h2 className='text-center font-bold text-2xl'>Send Message</h2>
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
    <div className="flex items-center justify-center bg-black rounded-md w-20">
        <button type="submit" className="btn text-white">Send</button>
    </div>
</form>

            {/*--------------------------------------------------------------------------------------------*/}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
