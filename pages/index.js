import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { useWeb3 } from '@3rdweb/hooks';

export default function Home() {
  const { address } = useWeb3();

  return (
    <div className=" bg-gray-100">
      <Navbar />
      <main className="max-w-screen-2xl mx-auto h-1/2">
        <Slider />
      </main>
    </div>
  );
}
