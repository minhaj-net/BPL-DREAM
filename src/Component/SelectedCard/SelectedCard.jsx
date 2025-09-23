import React from "react";

const SelectedCard = ({ player, removePlayer }) => {
  const handleRemove = () => {
    removePlayer(player);
  };

  return (
    <div>
      <div className="flex justify-between items-center shadow-lg mt-4 p-4 rounded-lg mb-4">
        <div className="flex gap-4 items-center">
          <img
            className="w-[60px] object-cover h-[60px] bg-[#D9D9D9] rounded-2xl"
            src={player.img}
            alt=""
          />
          <div>
            <h3 className="font-semibold">{player.name}</h3>
            <p className="text-[14px] text-gray-500">{player.bowlingStyle}</p>
          </div>
        </div>
        <div>
          <img
            onClick={handleRemove}
            src="https://i.ibb.co.com/5gp4r3Qy/Frame.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default SelectedCard;
