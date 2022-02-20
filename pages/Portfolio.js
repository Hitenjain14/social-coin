import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import myToken from '../ethereum/MyToken';
import web3 from '../ethereum/web3';

function Portfolio({ address }) {
  const router = useRouter();
  const coins = [];
  const [balance, setBalance] = useState(null);
  const [info, setInfo] = useState({});

  useEffect(() => {
    const getInfo = async () => {
      let bal = 0;
      await Promise.all(
        coins?.map(async (coin) => {
          let info = {};
          const contract = myToken(coin.address);
          const address = await web3.eth.getAccounts();
          if (address[0]) {
            let val = await contract.methods.balanceOf(address[0]).call();
            val = web3.utils.fromWei(val, 'ether');
            val = Number(val);
            // val = val = val * coin.price;
            bal = bal + val;
            if (val > 0) {
              info.address = coin.address;
              info.price = coin.price;
              info.amount = val;
              info.balance = coin.price * val;
              info.name = coin.name;
              info.logo = coin.logo;
              info.symbol = coin.symbol;
              info.change = (Math.random() * 40 - 20).toPrecision(2);
              setInfo(info);
            }
          } else {
            router.push('/Login');
          }
        })
      );
      setBalance(bal);
    };
    getInfo();
  }, [address]);

  return <div></div>;
}

export default Portfolio;
