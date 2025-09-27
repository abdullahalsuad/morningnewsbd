export interface ParentCategory {
  _id: string;
  name: string;
  slug: string;
  createdAt: string;
}

export interface ParentCategoryPayload {
  name: string;
  slug: string;
}

export interface ChildCategory {
  _id: string;
  name: string;
  slug: string;
  parentId: {
    _id: string;
    name: string;
  } | null;
  createdAt: string;
}

export interface ChildCategoryPayload {
  name: string;
  slug: string;
  parentId?: string | null;
}
