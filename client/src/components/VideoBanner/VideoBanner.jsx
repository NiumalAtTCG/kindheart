import React from 'react'

const VideoBanner = () => {
  return (
    <div className='bg-yellow-500 '>
       <div className='container md:h-[500px] flex items-center justify-center py-10'>
        {/* video Banner */}

        {/* text Container */}
           <div className='lg:max-w-[400px] space-y-6'>
            <h1 className='text-2xl font-semibold md:text-4xl mb-4'>Help the Needy People</h1>
            <ul className='flex  list-inside list-disc flex-col gap-2 md:gap-4'>
              <li className='font-medium'>
                Always give without remembering and always recive without forgetting
              </li>
              <li className='font-medium'>
                Giving does not only prrecede resiving: it is the reson for it
              </li>
              <li className='font-medium'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </li>
            </ul>
           <button className='btn-primary'>Get Started</button>
          </div>
      </div>
    </div>
  )
}

export default VideoBanner
