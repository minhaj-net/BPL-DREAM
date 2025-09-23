import React, { Suspense } from "react";
import { use } from "react";
import PlayerCard from "../PlayerCard/PlayerCard";

const AvailablePlayers = ({
  setPurchasedPlayers,
  purchesedPlayers,
  playersPromise,
  setAvailableBalance,
  availableBalance,
}) => {
  const playerData = use(playersPromise);
  return (
    <div className="max-w-[1200px] mx-auto grid items-center justify-center md:grid-cols-3 gap-3 ">
      {playerData.map((players) => (
        <Suspense>
          <PlayerCard
            setPurchasedPlayers={setPurchasedPlayers}
            purchesedPlayers={purchesedPlayers}
            availableBalance={availableBalance}
            key={players.id}
            setAvailableBalance={setAvailableBalance}
            players={players}
          ></PlayerCard>
        </Suspense>
      ))}
    </div>
  );
};

export default AvailablePlayers;
