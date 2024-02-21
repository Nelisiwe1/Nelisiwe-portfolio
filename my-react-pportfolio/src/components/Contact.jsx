import React from 'react'

const Contact = () => {
  return (
<div>
<div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{backgroundImage: 'url("c-back.jpg")'}}>
      <div className="bg-black bg-opacity-50 h-full flex justify-center">
      <h1 className='text-center font-bold text-5xl'>Contact</h1>
     
      <div class="contact" id="contact">
    <div class="row">
        <div class="icons-container">
            <div class="icons">
                <i class="fas fa-envelope"></i>
                <h3>my email</h3>
                <p>nelisiwengqeme3@gmail.com</p>
            </div>
            <div class="icons">
                <i class="fas fa-phone"></i>
                <h3>my number</h3>
                <p>+27 69 422 6621</p>
            </div>
            <div class="icons">
                <i class="fas fa-map-marker-alt"></i>
                <h3>my address</h3>
                <p>1941 Bhele Street, Daveyton 1520</p>
            </div>
        </div>

        <form class="max-w-5xl mx-auto p-6 bg-white-500 rounded-lg shadow-md b_glow">
            <h2 class='text-center font-bold text-2xl'>Send Message</h2>
            <div class="mb-4">
                <label for="name" class="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input type="text" id="name" placeholder="Enter your name" class="box-input" />
            </div>
            <div class="mb-4">
                <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input type="email" id="email" placeholder="Enter your email" class="box-input" />
            </div>
            <div class="mb-4">
                <label for="number" class="block text-gray-700 text-sm font-bold mb-2">Phone Number</label>
                <input type="tel" id="number" placeholder="Enter your phone number" class="box-input" />
            </div>
            <div class="mb-6">
                <label for="message" class="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea id="message" placeholder="Enter your message" rows="3" class="box-textarea"></textarea>
            </div>
            <div class="flex items-center justify-center bg-black rounded-md w-20">
                <button type="submit" class="btn text-white">Send</button>
            </div>
        </form>
    </div>
</div>

            </div>
            </div>
            </div>
        
    );
}
export default Contact