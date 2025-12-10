export interface Story {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  scpClass: 'Safe' | 'Euclid' | 'Keter' | 'Thaumiel' | 'Neutralized';
  author: string;
  image: string;
}
