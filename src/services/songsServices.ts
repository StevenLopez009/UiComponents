import { apiClient } from "../api/apiClient";

const DEEZER_BASE_URL = "/api-deezer";

export interface Song {
  id: number;
  title: string;
  preview: string;
  artist: { name: string; picture: string };
  album: { title: string; cover: string };
}

export interface SongResponse {
  data: Song[];
  total: number;
}

export const songsServices = {
  getSongs: (query: string): Promise<SongResponse> => {
    return apiClient<SongResponse>(
      DEEZER_BASE_URL,
      "/search",
      {},
      {
        q: query,
      },
    );
  },
};
