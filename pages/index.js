import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import web3 from '../ethereum/web3';
import Coins from '../models/coinModel';
import TopCoins from '../components/TopCoins';
import dbConnect from '../dbConnect';

export default function Home({ coins }) {
  const router = useRouter();
  const { address } = useWeb3();

  useEffect(() => {
    const getAcc = async () => {
      const accounts = await web3.eth.getAccounts();
      if (accounts.length === 0) {
        router.push('/Login');
      }
    };
    getAcc();
  }, []);

  return (
    <div className=" bg-gray-100">
      <Navbar address={address} coins={coins} />
      <main className="max-w-screen-2xl mx-auto h-1/2">
        <Slider />
      </main>
      <TopCoins data={coins} />
    </div>
  );
}

export async function getServerSideProps() {
  dbConnect();
  const allCoins = await Coins.find().sort({ price: -1 });
  const coins = allCoins.map((doc) => {
    const pet = doc.toObject();
    pet._id = pet._id.toString();
    const rand = (Math.random() * 40 - 20).toPrecision(2);
    pet.change = rand;
    return pet;
  });

  return { props: { coins } };
}
