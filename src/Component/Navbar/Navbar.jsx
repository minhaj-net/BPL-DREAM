import React from "react";
import navImg from "../../assets/logo.png";
import Coin from "../../assets/coin.png";

const Navbar = ({ availableBalance }) => {
  return (
    <div className="navbar max-w-[1200px] mx-auto">
      <div className="flex-1">
        <a>
          <img className="w-[50px] h-[50px]" src={navImg} alt="" />
        </a>
      </div>
      <div className="flex gap-4">
        <ul className="flex gap-4 text-[#131313B3]">
          <li>Home</li>
          <li>Fixture</li>
          <li>Teams</li>
          <li>Schedules</li>
        </ul>
        <span className="flex text-[#131313] font-bold">
          <span className="mr-3">{availableBalance}</span>
          {/* Coin */}
          <img src={Coin} alt="" />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
