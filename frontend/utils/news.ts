export interface NewsPayload {
  title: string;
  description: string;
  publicationDate?: string;
  author: {
    name: string;
    phone?: string;
    image?: string;
  };
  coverImage: {
    url: string;
    imgCaption?: string;
  };
}

export interface NewsItem extends NewsPayload {
  _id: string;
  publicationDate: string;
}
