export interface Statistics {
  id: number;
  title: string;
  statistics: StatisticsData[];
  userName: string;
  userId: string;
  prize: string;
  days: number;
  hasEnded: boolean;
  participants: number;
  participantsImages: Array<string>;
  userImgPath: string;
}

export interface StatisticsData {
  name: string;
  verified: boolean;
  imgPath: string;
  alerts: number;
  winRate: string;
  yield: string;
  amount: string;
  positive: boolean;
  change: string;
}
