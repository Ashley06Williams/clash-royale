"use client";

import { useEffect, useState } from "react";
import { getPlayerData } from "./actions";
import { PlayerData } from "../types/player";

export default function Home() {
  const [playerTag, setPlayerTag] = useState("PQ0RJY0JL");
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [suggestions, setSuggestions] = useState(false);

  const handleClick = () => {
    setSuggestions(true);
  };

  const handleSuggestionClick = (suggestedPlayer: string) => {
    const formData = new FormData();
    formData.append("playerTag", suggestedPlayer);
    handleSubmit(formData);
  };

  //Function run upon page reload
  useEffect(() => {
    const formData = new FormData();
    formData.append("playerTag", playerTag);
    handleSubmit(formData);
    //Function runs once upon page reload
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //function runs upon search button click
  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const tag = formData.get("playerTag") as string;
    const formattedTag = tag.replace("#", "");
    setSuggestions(false);
    try {
      const data = await getPlayerData(formattedTag);
      setPlayerData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching player data:", error);
      setIsLoading(false);
    }
  }

  const imageDisplay = () => {
    if (playerData?.currentPathOfLegendSeasonResult?.leagueNumber) {
      if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 1) {
        return "/challeng.svg";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 2
      ) {
        return "/challenge2.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 3
      ) {
        return "/challenge3.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 4
      ) {
        return "/league4.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 5
      ) {
        return "/league5.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 6
      ) {
        return "/league6.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 7
      ) {
        return "League 9 image";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 8
      ) {
        return "/league8.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 9
      ) {
        return "/league9.png";
      } else if (
        playerData?.currentPathOfLegendSeasonResult.leagueNumber === 10
      ) {
        return "/league10.png";
      }
    }
  };

  function getLeagueName(leagueNumber: number | undefined) {
    switch (leagueNumber) {
      case 1:
        return "Challenger 1";
      case 2:
        return "Challenger 2";
      case 3:
        return "Challenger 3";
      case 4:
        return "Master 1";
      case 5:
        return "Master 2";
      case 6:
        return "Master 3";
      case 7:
        return "Champion";
      case 8:
        return "Grand Champion";
      case 9:
        return "Royal Champion";
      case 10:
        return "Ultimate Champion";
      default:
        return "You are not in a league";
    }
  }

  // Example usage:
  const leagueNumber =
    playerData?.currentPathOfLegendSeasonResult?.leagueNumber;
  const leagueName = getLeagueName(leagueNumber);
  console.log(leagueName); // Outputs the corresponding league name

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-red to-blue-clash items-center justify-center ">
      <div className="bg-blue md:h-[550px]  w-full min-h-[800px] md:min-h-0 md:w-3/4 lg:w-1/2 md:rounded-3xl shadow-2xl md:p-2 my-12">
        <div className="SEARCH-BAR h-24 w-full p-4 mt-4 md:mt-2">
          <form
            action={handleSubmit}
            className="flex justify-between items-center"
          >
            <div className="flex items-center border border-white rounded-3xl px-2 md:px-6 w-[200px] md:w-[400px] mt-8 md:mt-0">
              <img src="searxng.svg" alt="search" className="w-6 h-6" />
              <input
                onClick={handleClick}
                onChange={(e) => {
                  setPlayerTag(e.target.value);
                }}
                value={playerTag}
                name="playerTag"
                type="text"
                className="bg-blue bg-opacity-0 p-3 lg:p-4 text-white outline-none "
                placeholder="Enter Player Tag #"
              />
            </div>
            {suggestions ? (
              <div className="absolute mt-[375px] ml-2 md:mt-80 md:ml-14 flex flex-col bg-slate-300 bg-opacity-95 border-2 border-blue shadow-2xl p-8 rounded-2xl">
                <div className="flex">
                  <h3 className="text-blue text-[22px] font-semibold mb-2">
                    Try these out !
                  </h3>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setSuggestions(false);
                    }}
                    className="absolute top-2 right-2 text-[16px] text-blue hover:text-red font-extrabold"
                  >
                    X
                  </button>
                </div>
                <div className="flex flex-col space-y-2">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPlayerTag("#R90PRV0PY");
                      handleSuggestionClick("#R90PRV0PY");
                    }}
                    className="text-left border-2 border-blue-light text-blue-light  hover:border-blue-clash hover:text-blue-clash rounded-lg p-3 text-[16px] font-semibold"
                  >
                    Ryley
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPlayerTag("#YGGYQYV");
                      handleSuggestionClick("#YGGYQYV");
                    }}
                    className="text-left border-2 border-blue-light text-blue-light  hover:border-blue-clash hover:text-blue-clash  rounded-lg p-3 text-[16px] font-semibold"
                  >
                    Juicy J
                  </button>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setPlayerTag("#GG829JGY");
                      handleSuggestionClick("#GG829JGY");
                    }}
                    className="text-left  border-2 border-blue-light text-blue-light hover:border-blue-clash hover:text-blue-clash rounded-lg p-3 text-[16px] font-semibold"
                  >
                    SirTagCR
                  </button>
                </div>
              </div>
            ) : null}

            <button
              className={`w-1/3 lg:w-1/4  p-3 rounded-3xl text-white mt-8 md:mt-0 ${
                !isLoading ? "bg-purple" : "bg-blue-light"
              }`}
              type="submit"
            >
              {!isLoading ? "Search" : "Searching..."}
            </button>
          </form>
        </div>

        {playerData && (
          <div className="mt-4">
            <div className="mx-6 text-white">
              <div className=" flex items-center justify-between ">
                <div>
                  <h1 className="text-[40px] font-light">{playerData.name}</h1>
                  <h2 className="text[35px] font-extralight">
                    {playerData.tag}
                  </h2>
                </div>
                <div>
                  <div className="w-14 h-14 rounded-full bg-blue-light flex items-center justify-center text-white font-bold text-[23px] mt-12 md:mt-0">
                    {playerData.expLevel}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center mt-0 md:-mt-4">
                <div className="flex flex-col items-center">
                  <img src={imageDisplay()} alt="" className="mt-6 w-64 h-64" />

                  <h3 className="mt-1 text-[35px] font-semibold">
                    {getLeagueName(
                      playerData.currentPathOfLegendSeasonResult?.leagueNumber
                    )}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex mt-8 md:-mt-60 h-full items-center justify-center md:justify-between space-x-4 mx-3">
              <div className="flex flex-col items-center justify-center w-1/2 lg:w-1/4 pb-6">
                <div className=" bg-blue-light w-full mb-4 md:mb-8 rounded-3xl  h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px] ">
                    Wins:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center ">
                    <p className="text-center text-white font-bold text-[30px] md:text-[35px]">
                      {playerData.wins}
                    </p>
                  </div>
                </div>

                <div className=" bg-blue-light w-full rounded-3xl h-[80px] md:[85px] pb-">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Losses:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center ">
                    <p className="text-center text-white font-bold text-[35px]">
                      {playerData.losses}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-1/2 lg:w-1/4 pb-6">
                <div className=" bg-blue-light w-full mb-4 md:mb-8 rounded-3xl h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Clan:{" "}
                  </p>
                  <div className=" ml-2 flex w-full items-center justify-center">
                    <p className="text-center text-white font-bold text-[20px] flex flex-wrap">
                      {playerData.clan?.name || "No Clan"}
                    </p>
                  </div>
                </div>
                <div className=" bg-blue-light w-full rounded-3xl h-[80px] md:[85px] ">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Trophies:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center ">
                    <p className="text-center text-white font-bold text-[35px]">
                      {playerData.trophies}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// <main className="p-4">
//   <h1 className="text-2xl font-bold mb-4">Clash Royale Player Data</h1>
//   <form action={handleSubmit}>
//     <input
//       type="text"
//       name="playerTag"
//       value={playerTag}
//       onChange={(e) => setPlayerTag(e.target.value)}
//       className="border p-2 mr-2 text-slate-800"
//       placeholder="Enter player tag"
//     />
//     <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//       Fetch Player Data
//     </button>
//   </form>
//   {playerData && (
//     <div className="mt-4">
//       <h2 className="text-xl font-semibold">{playerData.name}</h2>
//       <p>Tag: {playerData.tag}</p>
//       <p>Trophies: {playerData.trophies}</p>
//       <p>Level: {playerData.expLevel}</p>
//       <p>Clan: {playerData.clan?.name || "No Clan"}</p>
//       <p>
//         Arena: {playerData.currentPathOfLegendSeasonResult.leagueNumber}
//       </p>
//       <p>Wins: {playerData.wins}</p>
//       <p>Losses: {playerData.losses}</p>
//       <p>Total Donations: {playerData.totalDonations}</p>
//       <p>Favorite Card: {playerData.currentFavouriteCard.name}</p>
//     </div>
//   )}
// </main>
