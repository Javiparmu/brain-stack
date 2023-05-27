export type Category = 'genre' | 'mood' | 'instrument';

export type TagItem = string;

export type CategoryGroup = {
  category: Category;
  tags: TagItem[];
};

export type LoginFormValues = {
  email: string;
  password: string;
};

export type RegisterFormValues = {
  username: string;
  email: string;
  password: string;
};
