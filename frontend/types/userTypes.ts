export const ROLES = ["user", "reporter", "admin"] as const;

export type Role = (typeof ROLES)[number];

export type User = {
  _id: string;
  name: string;
  email: string;
  number: string;
  image?: string;
  role: Role;
  createdAt: string;
  updatedAt: string;
};
