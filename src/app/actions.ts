"use server";

import axios from "axios";
import { PlayerData } from "../types/player";

export async function getPlayerData(playerTag: string): Promise<PlayerData> {
  try {
    console.log("Server action called with tag:", playerTag);
    console.log(
      "API Token:",
      process.env.CLASH_ROYALE_API_TOKEN ? "Set" : "Not set"
    );
    const url = `https://api.clashroyale.com/v1/players/%23${playerTag}`;
    console.log("Requesting URL:", url);

    const response = await axios.get<PlayerData>(url, {
      headers: {
        Authorization: `Bearer ${process.env.CLASH_ROYALE_API_TOKEN}`,
      },
    });

    console.log("API Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Detailed error:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error details:", error.response?.data);
    }
    throw new Error(`Failed to fetch player data: ${error.message}`);
  }
}
