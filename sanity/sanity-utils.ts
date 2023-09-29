import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";
import { Page } from "@/types/Page";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
        _id,
        _createdAt,
        title,
        subtitle,
        "slug": slug.current,
        "image": image.asset->url,
        alt,
        url,
        repoUrl,
        content
    }`,
    { next: { revalidate: 10 } }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        subtitle,
        "slug": slug.current,
        "image": image.asset->url,
        alt,
        url,
        repoUrl,
        content
    }`,
    { slug, next: { revalidate: 10 } }
  );
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`,
    { next: { revalidate: 10 } }
  );
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
  }`,
    { slug, next: { revalidate: 10 } }
  );
}
