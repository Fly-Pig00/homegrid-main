import { Inter } from '@next/font/google';
import Link from 'next/link';
import SanityImage from '@/components/SanityImage'
import PreviewWrapper from '@/components/PreviewWrapper';
import { GetStaticProps } from 'next';
import { getHomePage } from '@/sanity/lib/client';
import { homePageQuery } from '@/sanity/lib/queries';
import { HomePagePayload } from '@/sanity/types';

const inter = Inter({ subsets: ['latin'] })

const Home = ({data, preview, query} : {data: HomePagePayload, preview: boolean, query: string }) => {
  return (
      <div className='home'>
        <PreviewWrapper preview={preview} query={query}>
          <Hero data={data}/>
          <FeatureProduct data={data}/>
          <Partners data={data}/>
        </PreviewWrapper>
      </div>
  )
};


const Hero = ({data} : {data: HomePagePayload}) => {
  const {image, slogan} = data!.hero
  return (
    <div className='hero'>
      <div className='hero__image '>
        <SanityImage asset={image.asset} alt="homegrid hero image" fill/>
      </div>
      <h1 className='hero__slogan'>{slogan}</h1>
      {/* <Link className='hero__image' href={link}>link</Link> */}
    </div>
  )
}

const FeatureProduct = ({data} : {data: HomePagePayload}) => {
  const {slug, copy, image} = data!.featureProduct
  return (
    <div className={`home__feature ${inter.className}`}>
      <Link className='home__feature--image' href={`/${slug}`}>
        <SanityImage asset={image.asset} alt='homegrid featured product'/>
      </Link>
      <h3 className='home__feature--copy'>{copy}</h3>
      <div className='home__feature--grayBlock'>
        <div>
          <div/>
        </div>
      </div>
    </div>
  )
}
const Partners = ({data} : {data: HomePagePayload}) => {
  return (
    <div className='partners'>
      <h1 className='partners__title'>our partners</h1>
      <div className='partners__logosContainer'>
        {
          data?.partners.map(({name, link, logo}, idx) => {
            return (
              <Link className='partners__logo' href={link} key={idx} target="_blank">
                <SanityImage
                  asset={logo.asset}
                  alt={`${name}-logo`}
                />
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps= async (context) => {
  const {preview = false } = context;
  const data = await getHomePage();
  return {
    props:{
      data,
      preview,
      query: homePageQuery
    }
  };
};

export default Home;