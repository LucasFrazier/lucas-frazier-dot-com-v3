import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";

type Props = {
  params: { project: string };
};

export default async function Project({ params }: Props) {
  const slug = params.project;

  const project = await getProject(slug);

  return (
    <div>
      <header className="flex flex-col lg:flex-row justify-between items-center gap-y-5">
        <h1 className="text-blue text-3xl lg:text-5xl drop-shadow font-extrabold">
          {project.title}
        </h1>
        <div className="flex flex-col md:flex-row gap-5">
          <a
            href={project.repoUrl}
            tabIndex={0}
            title="View GitHub Repository"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2.5 bg-dark border-2 border-light rounded-lg text-light font-medium py-3 px-4 whitespace-nowrap transition ${
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
            className="flex items-center gap-2.5 bg-dark border-2 border-light hover:border-green focus:border-green hover:text-green focus:text-green rounded-lg text-light font-medium py-3 px-4 whitespace-nowrap transition hover:scale-105 focus:scale-105 cursor-pointer"
          >
            <span>View Live Site</span>
            <Image src={"/new-window.svg"} alt={""} width={25} height={25} />
          </a>
        </div>
      </header>

      {/* content */}
      <div className="text-lg text-light mt-10">
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
