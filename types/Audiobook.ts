export interface Audiobook {
  id: string;
  title: string;
  author: string;
  coverImage?: string; // Making it optional as mock data might not have it
  audioFile?: string; // Making it optional for now
}