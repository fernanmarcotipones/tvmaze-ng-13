export interface Show {
  score: number;
  show: ShowDetails;
}

export interface ShowDetails {
  id: number;
  url: string;
  name: string;
  genres: string[];
  status: string;
  premiered: string;
  ended: string;
  officialSite: string;
  rating: { average: number };
  image?: {
    medium?: string;
    original?: string;
  };
  summary: string;
}

export interface ShowsState {
  isLoading: boolean;
  shows: Show[];
  error: string | null;
}

export interface DetailState {
  isLoading: boolean;
  show: ShowDetails;
  error: string | null;
}

export const DEFAULT_SHOW_DETAILS: ShowDetails = {
  'id': 0,
  'url': '',
  'name': '',
  'genres': [],
  'status': '',
  'premiered': '',
  'ended': '',
  'officialSite': '',
  'rating': {
    'average': 0,
  },
  'image': {
    'medium': '',
    'original': '',
  },
  'summary': '',
}

export const DEFAULT_SHOW: Show = {
  'score': 0,
  'show': DEFAULT_SHOW_DETAILS,
}