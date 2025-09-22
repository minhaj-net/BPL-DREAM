import React from "react";
import { use } from "react";
import userImg from "../../assets/user-1.png";
import country from "../../assets/country.png";

const AvailablePlayers = ({ playersPromise }) => {
  const playerData = use(playersPromise);
  console.log(playerData);
  return (
    <div className="max-w-[1200px] mx-auto grid items-center justify-center md:grid-cols-3 gap-3 ">
      {playerData.map((players) => (
        <div class="card bg-base-100 w-96 shadow-lg p-4 rounded-xl">
          <figure>
            <img className="w-full h-[200px] " src={players.img} alt="Shoes" />
          </figure>
          <div className="mt-2">
            <div className="flex gap-2">
              <img src={userImg} alt="" />
              <h2 className=" font-semibold text-[16px]">{players.name}</h2>
            </div>
            <div className="flex justify-between items-center border-b-1 border-gray-300 pb-1">
              <span className="flex gap-2 text-gray-500 text-[12px]">
                <img className="w-[18px] h-[18px]" src={country} alt="" />
                <p>{players.country}</p>
              </span>
              <button className="bg-[##1313130d] btn text-[14px] ">
                {players.role}
              </button>
            </div>
            <div className="flex justify-between items-center font-bold">
              <p className=" mt-3">Rating</p>
              <span>5</span>
            </div>
            <span className="flex justify-between items-center mt-2 mb-2 ">
              <p className="font-bold">{players.battingStyle}</p>
              <p className="text-gray-500">{players.bowlingStyle}</p>
            </span>
            <div class="card-actions justify-between font-bold">
              <p>
                Price: $ <span>{players.priceUSD}</span>
              </p>
              <button class="btn btn-soft btn-warning">Choose Player</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailablePlayers;
