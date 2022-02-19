import React from "react";

function Coins({ name, logo }) {
  return (
    <div>
      <img src={logo} />
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default Coins;
