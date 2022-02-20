import React from "react";
import tw from "tailwind-styled-components";

function Coins({ coin }) {
  //console.log(coin);
  return (
    <Return>
      <Wrapper>
        <Coin>
          <Img src={coin.logo} />
          <Name>
            <p className="text-xl">{coin.symbol}</p>
            <p className="text-gray-500">{coin.name}</p>
          </Name>
        </Coin>
        <Element>
          <p className="text-xl font-normal">${coin.price}</p>
        </Element>
        <Change>
          {coin.change > 0 && (
            <p className="text-xl text-green-500 font-normal">
              +{coin.change}%
            </p>
          )}
          {coin.change < 0 && (
            <p className="text-xl text-red-500 font-normal">{coin.change}%</p>
          )}
        </Change>
        <Amount>
          <p>coin.amount</p>
        </Amount>
      </Wrapper>
    </Return>
  );
}
const Return = tw.div`
flex justify-center
`;
const Wrapper = tw.div`
flex justify-evenly items-center m-2 bg-gray-50 hover:bg-gray-300
`;
const Coin = tw.div`
w-[20vw] p-4 flex font-sans
`;
const Element = tw.div`
w-[20vw] p-4 flex justify-center font-sans
`;
const Change = tw.div`
w-[20vw] p-4 flex flex-col items-center font-sans
`;
const Amount = tw.div`
w-[20vw] p-4 flex flex-col items-end font-sans
`;
const Name = tw.div`
ml-3 flex flex-col
`;
const Img = tw.img`
rounded-full h-4/5
`;

export default Coins;
