import React from 'react'

const Fcard = ({id, img , heading , para}) => {
  return (
    <div className={`fcard${id} w-90 h-100 flex flex-col px-10 py-2 md:p-2`}>
        <div className="img h-[60%] overflow-hidden">
            <img src={img} alt="fcard1" className='object-cover w-full' />
        </div>
        <div className="textBox mt-4">
            <h1 className='uppercase mont-semibold text-lg'>{heading}</h1>
            <div className="line w-18 bg-blue-400 h-0.5 mt-2"></div>
            <p className='mt-6 roboto-thin'>{para}</p>
        </div>
    </div>
  )
}

export default Fcard