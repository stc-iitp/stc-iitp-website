export interface LeaderboardEntry {
    position: number;
    team: string;
    score: number;
}

export type LeaderboardDataType = Record<string, LeaderboardEntry[]>;

export const leaderboardData: LeaderboardDataType = {
    "2025": [
        { position: 1, team: "Software", score: 3120 },
        { position: 2, team: "Hardware", score: 2890 },
        { position: 3, team: "Research", score: 2340 },
    ],
    "2024": [
        { position: 1, team: "Hardware", score: 2750 },
        { position: 2, team: "Software", score: 2610 },
        { position: 3, team: "Research", score: 1980 },
    ],
};
