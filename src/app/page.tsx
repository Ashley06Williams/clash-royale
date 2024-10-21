"use client";

import { useState } from "react";
import { getPlayerData } from "./actions";
import { PlayerData } from "../types/player";
import MainDisplay from "@/components/MainDisplay";
import PlayerDetails from "@/components/PlayerDetails";
import SearchBar from "@/components/SearchBar";
import ArenaImg from "@/components/ArenaImg";

export default function Home() {
  const [playerTag, setPlayerTag] = useState("PQ0RJY0JL");
  const [playerData, setPlayerData] = useState<PlayerData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(formData: FormData) {
    setIsLoading(true);
    const tag = formData.get("playerTag") as string;
    const formattedTag = tag.replace("#", "");
    try {
      const data = await getPlayerData(formattedTag);
      setPlayerData(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching player data:", error);
    }
  }

  const imageDisplay = () => {
    console.log(
      "Image Path:",
      playerData?.currentPathOfLegendSeasonResult.leagueNumber
    );
    if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 1) {
      return "/challeng.svg";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 2) {
      return "/challenge2.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 3) {
      return "/challenge3.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 4) {
      return "/league4.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 5) {
      return "/league5.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 6) {
      return "/league6.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 7) {
      return "League 9 image";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 8) {
      return "/league8.png";
    } else if (playerData?.currentPathOfLegendSeasonResult.leagueNumber === 9) {
      return "/league9.png";
    } else if (
      playerData?.currentPathOfLegendSeasonResult.leagueNumber === 10
    ) {
      return "/league10.png";
    }
  };

  function getLeagueName(leagueNumber) {
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
        return "Unknown League";
    }
  }

  // Example usage:
  const leagueNumber =
    playerData?.currentPathOfLegendSeasonResult?.leagueNumber;
  const leagueName = getLeagueName(leagueNumber);
  console.log(leagueName); // Outputs the corresponding league name

  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-red to-blue-clash items-center justify-center">
      <div className="bg-blue h-[800px] w-full  md:w-1/2 rounded-3xl shadow-2xl p-2">
        <div className="SEARCH-BAR h-24 w-full p-4">
          <form
            action={handleSubmit}
            className="flex justify-between items-center"
          >
            <div className="flex items-center border border-white rounded-3xl px-2 md:px-6 w-[200px] md:w-[400px] ">
              <img src="searxng.svg" alt="search" className="w-6 h-6" />
              <input
                onChange={(e) => {
                  setPlayerTag(e.target.value);
                }}
                value={playerTag}
                name="playerTag"
                type="text"
                className="bg-blue bg-opacity-0 w-4/5 lg:w-2/4 p-3 lg:p-4 text-white"
                placeholder="Player Tag"
              />
            </div>

            <button
              className="w-1/3 lg:w-1/4 bg-purple p-3 rounded-3xl text-white "
              type="submit"
            >
              Search
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
                  <div className="w-14 h-14 rounded-full bg-blue-light flex items-center justify-center text-white font-bold text-[23px]">
                    {playerData.expLevel}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <img
                    src={imageDisplay()}
                    alt="Image of your arena"
                    className="mt-6"
                  />

                  <h3 className="mt-2 text-[35px] font-semibold">
                    {getLeagueName(
                      playerData.currentPathOfLegendSeasonResult.leagueNumber
                    )}
                  </h3>
                </div>
              </div>
            </div>

            <div className="flex mt-8 h-full items-center justify-center space-x-4 mx-3">
              <div className="flex flex-col items-center justify-center w-1/2 lg:w-1/3 ">
                <div className=" bg-blue-light w-full mb-4 rounded-3xl  h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px] ">
                    Wins:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center ">
                    <p className="text-center text-white font-bold text-[30px] md:text-[35px]">
                      {playerData.wins}
                    </p>
                  </div>
                </div>

                <div className=" bg-blue-light w-full rounded-3xl h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Clan:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center ">
                    <p className="text-center text-white font-bold text-[35px]">
                      {playerData.clan?.name || "No Clan"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center w-1/2 lg:w-1/3">
                <div className=" bg-blue-light w-full mb-4 rounded-3xl h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Losses:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center">
                    <p className="text-center text-white font-bold text-[35px]">
                      {playerData.losses}
                    </p>
                  </div>
                </div>
                <div className=" bg-blue-light w-full rounded-3xl h-[80px] md:[85px]">
                  <p className="pl-3 pt-2 font-extralight text-[15px] md:text-[17px]">
                    Trophies:{" "}
                  </p>
                  <div className="-mt-2 ml-2 flex w-full items-center justify-center">
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
