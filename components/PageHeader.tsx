import React from 'react';
import Image from 'next/image';

type header = {
  title: string,
  description: string,
  image: string
}

const PageHeader = ({title, description, image} : header) => {
  return (
    <div className="pageHeader bg-secondary">
      <div className='absolute top-0 left-0 right-0 h-full'>
        <Image fill
          src={image}
          alt={`${title}-image`}
          className="object-cover"
        />
      </div>
      <div className='page relative '>
        <h1 className='text-white'>{title}</h1>
        <p className='text-secondary font-light'>{description}</p>
      </div>
    </div>
  )
}

export default PageHeader;