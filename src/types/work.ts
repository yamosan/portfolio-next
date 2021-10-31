export type Section = {
  head: string;
  images?: {
    src: string;
    alt?: string;
  }[];
  description: string[];
};

export type Work = {
  id: string;
  thumbnail: {
    imageUrl: string;
    youtubeId?: string;
  };
  title: string;
  genre: string;
  role: string;
  skills: {
    main: string;
    others: string[];
  };
  period: string;
  urls?: {
    site?: string;
    repository?: string;
  };
  content?: Section[];
};
