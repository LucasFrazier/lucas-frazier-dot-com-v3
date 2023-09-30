import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

export const revalidate = 0;

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-y-5">
        <div className="text-center lg:text-left">
          <h1 className="text-blue text-3xl lg:text-6xl drop-shadow font-extrabold">
            {project.title}
          </h1>
          <p className="mt-3 text-xl text-pink">{project.subtitle}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 mt-2">
          <a
            href={project.repoUrl}
            tabIndex={0}
            title="View GitHub Repository"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2.5 bg-dark border-2 border-light rounded-lg text-light font-medium py-3 px-4 whitespace-nowrap transition ${
              project.repoUrl
                ? "hover:scale-105 focus:scale-105 cursor-pointer hover:border-green focus:border-green hover:text-green focus:text-green"
                : ""
            }`}
          >
            <span>View GitHub Repo</span>
            <Image src={"/new-window.svg"} alt={""} width={25} height={25} />
          </a>
          <a
            href={project.url}
            title="View Live Site"
            tabIndex={0}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2.5 bg-dark border-2 border-light hover:border-green focus:border-green hover:text-green focus:text-green rounded-lg text-light font-medium py-3 px-4 whitespace-nowrap transition hover:scale-105 focus:scale-105 cursor-pointer"
          >
            <span>View Live Site</span>
            <Image src={"/new-window.svg"} alt={""} width={25} height={25} />
          </a>
        </div>
      </header>

      <h2 className="mt-16 text-blue text-3xl font-bold">About the Project</h2>
      <p className="mt-3 text-xl text-pink">Coming Soon</p>

      {/* content */}
      <h2 className="mt-16 text-blue text-3xl font-bold">Built With</h2>
      <div className="text-light mt-5">
        <PortableText value={project.content} />
      </div>

      {/* image */}
      <Image
        src={project.image}
        alt={`${project.title} page`}
        width={1920}
        height={1080}
        className="mt-10 border-2 border-gray-700 object-cover rounded-xl"
      />
    </div>
  );
}
