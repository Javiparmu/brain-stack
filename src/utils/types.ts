export type Category = 'genre' | 'mood' | 'instrument';
export type TagItem = string;
export type CategoryGroup = {
  category: Category;
  tags: TagItem[];
};
