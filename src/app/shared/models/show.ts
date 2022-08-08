export interface Show {
  score: number;
  show: ShowDetails;
}

export interface ShowDetails {
  id: number;
  url: string;
  name: string;
  type: string;
  genres: string[];
  status: string;
  runtime: number;
  averageRuntime: number;
  premiered: string;
  ended: string;
  officialSite: string;
  schedule: { days: string[] };
  rating: { average: number };
  weight: number;
  image: {
    medium: string;
    original: string;
  };
  summary: string;
  updated: Date;
  
}

export interface ShowsState {
  isLoading: boolean;
  shows: Show[];
  error: string | null;
}