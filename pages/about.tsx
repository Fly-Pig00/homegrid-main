import React from 'react';
// import PageHeader from '../../components/PageHeader';
import Image from 'next/image';
import { AboutPagePayload } from '@/sanity/types';
import SanityImage from '@/components/SanityImage';
import { getAboutPage } from '@/sanity/lib/client';

const About = ({about:{descriptionSet}}: {about: AboutPagePayload}) => {
    {/* <PageHeader
    title={descriptionSet[0]?.title}
    description={descriptionSet[0]?.description}
    image={descriptionSet[2]?.image?.asset.url}
  /> */}
  return (
    <div className='about page'>
      {
        descriptionSet?.map((set, idx) => {
          return (
            <div className="about__container" key={idx}>
              <div className='about__image'>
                <SanityImage asset={set.image?.asset} alt={`${set.title}-image`}/>
              </div>
              <div className={`${set?.image && "flex-1" }`}>
                <h2 className={`${!set?.image && "text-center"}`}>{set.title}</h2>
                <p>{set.description}</p>
              </div>
            </div>
          )
        })
      }
      <div className='h-60 md:h-96 lg:h-[600px] w-full relative'>
        <Image
          src="/lithion-global.png"
          alt="lithion global map"
          className="object-cover w-full h-full"
          fill
        />
      </div>
    </div>
  )
};

export const getStaticProps= async () => {
  const data = await getAboutPage()
  return {
    props:{
      about: data
    }
  };
}

export default About;