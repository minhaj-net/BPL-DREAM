import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./Component/AvailablePlayers/AvailablePlayers";
import Navbar from "./Component/Navbar/Navbar";
import SelectedPlayers from "./Component/SelectedPlayers/SelectedPlayers";

const availablePlayerPromise = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
function App() {
  const [toggole, setToggole] = useState(false);
  const playersPromise = availablePlayerPromise();
  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-[1200px] mx-auto flex justify-between items-center mt-10">
        <h2 className="font-bold text-2xl">Available Players </h2>
        <div>
          <button
            onClick={() => setToggole(true)}
            className={`btn rounded-l-xl border-gray-300  border-r-0  ${
              toggole === true ? "bg-yellow-300" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setToggole(false)}
            className={`btn rounded-r-xl border-gray-200 ${
              toggole === false ? "bg-yellow-300" : ""
            }`}
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div>
      {toggole === true ? (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-32">
              <div className="w-12 h-12 border-4 border-t-[#131313B3] border-gray-200 rounded-full animate-spin"></div>
            </div>
          }
        >
          <AvailablePlayers playersPromise={playersPromise}></AvailablePlayers>
        </Suspense>
      ) : (
        <Suspense
          fallback={
            <div className="flex justify-center items-center h-32">
              <div className="w-12 h-12 border-4 border-t-[#131313B3] border-gray-200 rounded-full animate-spin"></div>
            </div>
          }
        >
          <SelectedPlayers></SelectedPlayers>
        </Suspense>
      )}
    </>
  );
}

export default App;
