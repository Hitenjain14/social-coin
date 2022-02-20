import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useWeb3 } from '@3rdweb/hooks';
import { useRouter } from 'next/router';
import web3 from '../ethereum/web3';

import { ToastContainer, toast } from 'react-toastify';
import { Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const { address, connectWallet } = useWeb3();
  const [wallet, setWallet] = useState(null);

  const router = useRouter();
  useEffect(() => {
    if (wallet) {
      router.push('/');
    }
  }, [wallet]);

  useEffect(() => {
    if (address) {
      router.push('/');
    }
  }, []);

  const notify = () => {
    toast.info('Please connect to polygon mumbai', {
      position: 'top-center',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });
  };

  const connectMetamask = async () => {
    const chainId = await web3.eth.net.getId();
    console.log(chainId);
    if (chainId === 80001) {
      await connectWallet('injected');
      const accounts = await web3.eth.getAccounts();
      if (accounts) {
        setWallet(accounts[0]);
      }
    } else {
      notify();
    }
  };

  return (
    <Wrapper>
      <Head>
        <Quote>
          <Text>Grow with your favourite artists</Text>
          <Text>and Help them Grow!!</Text>
        </Quote>
        <Collab>
          <Image src="https://i.pinimg.com/736x/95/79/d4/9579d4eaeb690e91aca21658869fe926.jpg" />
        </Collab>
      </Head>
      <Buttons>
        <Button onClick={() => connectMetamask()}>
          <Icon src="/public/metamask.png" />
          Connect using MetaMask
        </Button>
        <Button>Be an Artist</Button>
      </Buttons>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Flip}
      />
    </Wrapper>
  );
}
const Wrapper = tw.div`
h-screen bg-[url('https://images.pexels.com/photos/743986/pexels-photo-743986.jpeg?cs=srgb&dl=pexels-jess-bailey-designs-743986.jpg&fm=jpg')]
bg-cover bg-center flex flex-col
`;
const Head = tw.div`
h-[50vh] w-[100vw] flex
`;
const Quote = tw.div`
flex flex-col justify-center ml-5 w-[40vw]`;
const Collab = tw.div`
flex w-[60vw] justify-center items-center
`;
const Image = tw.img`
h-[40vh] rounded-full
`;

const Text = tw.div`
bg-gray-300 my-1 text-5xl p-2 font-mono rounded-lg text-blue-700 box-decoration-clone hover:box-decoration-slice
`;
const Buttons = tw.div`
flex-1 flex
`;
const Button = tw.button`
bg-white h-10 flex items-center mx-5 mb-5  p-2 rounded-lg hover:bg-sky-500 text-xl border borderborder border-gray-500
`;

const Icon = tw.img``;
export default Login;
