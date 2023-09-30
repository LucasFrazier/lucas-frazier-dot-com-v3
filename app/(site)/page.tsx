import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-6xl font-extrabold text-light pr-16">
        I&apos;m <br className="md:hidden" />
        <span className="text-blue">
          Lucas <br className="md:hidden" />
          Frazier
        </span>
        .
      </h1>
      <p className="mt-3 text-xl text-pink">This is my portfolio</p>
      <h2 className="mt-16 font-bold text-blue text-3xl">Projects</h2>
      <p className="mt-3 text-xl text-pink">Select a project to learn more</p>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mx-auto">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-light rounded-lg p-2.5 hover:scale-105 focus:scale-105 hover:border-green focus:border-green hover:shadow-md focus:shadow-md transition mx-auto"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.title} page`}
                width={250}
                height={250}
                className="object-cover rounded-lg border-2 border-light"
              ></Image>
            )}
            <h3 className="mt-2 text-blue text-lg">{project.title}</h3>
            <p className="mt-1 text-pink">{project.subtitle}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
