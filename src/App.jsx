import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Navbar from "./Component/Navbar/Navbar";
import SelectedPlayers from "./Component/SelectedPlayers/SelectedPlayers";

const availablePlayerPromise = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
function App() {
  const playersPromise = availablePlayerPromise();
  return (
    <>
      <Navbar></Navbar>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-32">
            <div className="w-12 h-12 border-4 border-t-[#131313B3] border-gray-200 rounded-full animate-spin"></div>
          </div>
        }
      >
        <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
      </Suspense>
      {/* <SelectedPlayers></SelectedPlayers> */}
    </>
  );
}

export default App;
