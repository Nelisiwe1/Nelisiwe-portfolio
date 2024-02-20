import React from 'react'

const Contact = () => {
  return (
<div>
<div className="bg-cover bg-center bg-no-repeat bg-fixed h-screen" style={{backgroundImage: 'url("c-back.jpg")'}}>
      <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">Welcome to My Website</h1>
      </div>
    </div>
    <div className='p-4 lg:p-20 flex-col items-center justify-center'>
        <h1>Contact</h1>
        <form action="">
            <div>
                <input type="text" />
                <input type="text" />
            </div>
            <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="Send" ></button>
        </form>
    </div>
    </div>
  )
}

export default Contact