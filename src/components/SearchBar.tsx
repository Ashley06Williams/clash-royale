// import { getPlayerData } from "@/app/actions";
// import { PlayerData } from "@/types/player";
// import React, { Dispatch, SetStateAction } from "react";

// type SearchBarProps = {
//   setPlayerData: Dispatch<SetStateAction<PlayerData | null>>;
//   setPlayerTag: Dispatch<SetStateAction<string>>;
//   playerTag: string;
// };

// export default function SearchBar({
//   setPlayerData,
//   setPlayerTag,
//   playerTag,
// }: SearchBarProps) {
//   async function handleSubmit(formData: FormData) {
//     const tag = formData.get("playerTag") as string;

//     try {
//       const data = await getPlayerData(tag);
//       setPlayerData(data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <div className="h-24 w-full p-4">
//       <form action={handleSubmit} className="flex justify-between">
//         <input
//           onChange={(e) => {
//             setPlayerTag(e.target.value);
//           }}
//           value={playerTag}
//           name="playerTag"
//           type="text"
//           className="bg-blue border border-white rounded-3xl w-3/5  lg:w-2/4 p-3 lg:p-4 text-white"
//           placeholder="Player Tag"
//         />
//         <button
//           className="w-1/3 lg:w-1/4 bg-purple p-3 rounded-3xl text-white "
//           type="submit"
//         >
//           Search
//         </button>
//       </form>
//     </div>
//   );
// }
