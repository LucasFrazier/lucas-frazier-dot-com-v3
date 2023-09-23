import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string; // underscore means created by Sanity
  _createdAt: Date;
  title: string; // no underscore means we created
  subtitle: string;
  slug: string;
  image: string;
  alt: string;
  url: string;
  content: PortableTextBlock[];
};
