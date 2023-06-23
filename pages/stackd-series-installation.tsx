import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ServerResponse } from 'http';

const Resources = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('/downloads');
  }, [router]);

  return <div>loading...</div>;
};

export const getServerSideProps = async ({ res }:{res: ServerResponse}) => {
    res.writeHead(302, {
      Location: '/downloads',
    });
    res.end();
  
    return { props: {} };
};
  

export default Resources;
