export interface Author {
  userId?: string;
  name: string;
  image?: string;
}

export interface CoverImage {
  url: string;
  imgCaption?: string;
}

export interface NewsItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
  parentCategoryId: {
    _id: string;
    name: string;
  };
  childCategoryId?: {
    _id: string;
    name: string;
  } | null;
  publicationDate: string;
  status: "scheduled" | "published";
  author: Author;
  coverImage: CoverImage;
  createdAt: string;
  updatedAt: string;
}

export interface NewsPayload {
  title: string;
  description: string;
  slug?: string;
  parentCategoryId: string;
  childCategoryId?: string | null;
  publicationDate: string;
  author: {
    userId?: string;
    name: string;
    image?: string;
  };
  coverImage: {
    url: string;
    imgCaption?: string;
  };
}
