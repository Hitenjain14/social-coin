import React, { useEffect } from "react";
import { useState } from "react";
import tw from "tailwind-styled-components";
import Coins from "./Coins";

function TopCoins({ data }) {
  const x = "Unique";
  return (
    <Wrapper>
      <Heading>Market Trend</Heading>
      {data.results.map((coin) => (
        <Coins
          key={x}
          name={`${coin.name.first} ${coin.name.last}`}
          logo={coin.picture.thumbnail}
        />
      ))}
    </Wrapper>
  );
}
const Wrapper = tw.div``;
const Heading = tw.div``;

export async function getServerSideProps() {
  const res = await fetch(`https://randomuser.me/api/?results=10`);
  const data = await res.json();
  return { props: { data } };
}

export default TopCoins;
