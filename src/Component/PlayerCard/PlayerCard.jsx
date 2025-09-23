import React from "react";
import userImg from "../../assets/user-1.png";
import country from "../../assets/country.png";
// import { toast } from "react-toastify";

const PlayerCard = ({
  players,
  setAvailableBalance,
  availableBalance,
  setPurchasedPlayers,
  purchesedPlayers,
}) => {
  const playerData = (playerData) => {
    if (availableBalance < playerData.priceUSD) {
      alert("You don't have enough balance for this player");
      return;
    }
    if (purchesedPlayers.length >= 6) {
      alert("You can only select 6 players");
      return;
    }
    setIsSelected(true);
    setAvailableBalance(availableBalance - playerData.priceUSD);
    setPurchasedPlayers([...purchesedPlayers, playerData]);
    alert("Purchased player");
  };
  const [isSelected, setIsSelected] = React.useState(false);
  return (
    <div className="card bg-base-100 w-96 shadow-lg p-4 rounded-xl">
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
          <span>{players.rating}</span>
        </div>
        <span className="flex justify-between items-center mt-2 mb-2 ">
          <p className="font-bold">{players.battingStyle}</p>
          <p className="text-gray-500">{players.bowlingStyle}</p>
        </span>
        <div className="card-actions justify-between font-bold">
          <p>
            Price: $ <span>{players.priceUSD}</span>
          </p>
          <button
            disabled={isSelected === true}
            onClick={() => {
              playerData(players);
            }}
            className={`btn btn-soft btn-warning ${
              isSelected ? "btn btn-soft btn-error" : ""
            }`}
          >
            {isSelected === true ? "Selected" : "Choose PLayer"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
