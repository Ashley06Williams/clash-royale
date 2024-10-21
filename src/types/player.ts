export interface PlayerData {
  tag: string;
  name: string;
  expLevel: number;
  trophies: number;
  bestTrophies: number;
  wins: number;
  losses: number;
  battleCount: number;
  threeCrownWins: number;
  challengeCardsWon: number;
  challengeMaxWins: number;
  tournamentCardsWon: number;
  tournamentBattleCount: number;
  role: string;
  donations: number;
  donationsReceived: number;
  totalDonations: number;
  warDayWins: number;
  clanCardsCollected: number;
  clan?: {
    tag: string;
    name: string;
    badgeId: number;
  };
  arena: {
    id: number;
    name: string;
  };
  leagueStatistics?: {
    currentSeason: {
      trophies: number;
      bestTrophies: number;
    };
    previousSeason: {
      id: string;
      trophies: number;
      bestTrophies: number;
    };
    bestSeason: {
      id: string;
      trophies: number;
    };
  };
  badges: Array<{
    name: string;
    progress: number;
    level: number;
    maxLevel: number;
    target: number;
  }>;
  achievements: Array<{
    name: string;
    stars: number;
    value: number;
    target: number;
    info: string;
    completionInfo: string | null;
  }>;
  cards: Array<{
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    count: number;
    iconUrls: {
      medium: string;
    };
  }>;
  currentDeck: Array<{
    name: string;
    id: number;
    level: number;
    maxLevel: number;
    count: number;
    iconUrls: {
      medium: string;
    };
  }>;
  currentFavouriteCard: {
    name: string;
    id: number;
    maxLevel: number;
    iconUrls: {
      medium: string;
    };
  };
  currentPathOfLegendSeasonResult: {
    leagueNumber: number;
    trophies: number;
    rank: string;
  };
}
