import React, { useEffect } from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import Coins from "./../components/Coins";
import Link from "next/link";

function TopCoins({ data }) {
  const [coinType, setCoinType] = useState("");
  return (
    <Wrapper>
      <SearchBar>
        {/* <i className="fa fa-search"></i> */}
        <Bar
          placeholder="Search your favorite creators Coin!!"
          value={coinType}
          onChange={(e) => setCoinType(e.target.value)}
        />
        <Link href="/get">
          <Button>Search</Button>
        </Link>
      </SearchBar>
      <Heading>
        <Head>Market Trend</Head>
      </Heading>
      <Table>
        {data.map((coin, i) => (
          <Coins key={i} coin={coin} />
        ))}
      </Table>
    </Wrapper>
  );
}
const Wrapper = tw.div`
flex flex-col items-center
`;
const SearchBar = tw.div`
w-[55vw] flex justify-center items-center m-2 border border-gray-300 rounded-lg shadow-md bg-gray-50
`;
const Bar = tw.input`
w-[50vw] outline-none border-none bg-gray-50
`;
const Button = tw.button`
bg-white h-6 flex items-center my-1 p-2 rounded-lg bg-blue-500 text-white hover:bg-blue-700
`;
const Heading = tw.div`
h-[10vh] text-center
`;
const Head = tw.div`
text-3xl pt-3 font-medium
`;
const Table = tw.div`
flex flex-col
`;

// export async function getServerSideProps() {
//   const res = await fetch(`https://randomuser.me/api/?results=7`);
//   const data = await res.json();
//   return { props: { data } };
// }

export default TopCoins;
