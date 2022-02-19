import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { address } = useWeb3();

  useEffect(() => {
    if (!address) {
      router.push('/Login');
    }
  }, [address]);

  return (
    <div className=" bg-gray-100">
      <Navbar address={address} />
      <main className="max-w-screen-2xl mx-auto h-1/2">
        <Slider />
      </main>
    </div>
  );
}
