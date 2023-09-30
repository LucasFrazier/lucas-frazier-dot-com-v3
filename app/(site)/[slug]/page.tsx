import { getPage } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";

export const revalidate = 0;

type Props = {
  params: { slug: string };
};

export default async function Page({ params }: Props) {
  const { title, content } = await getPage(params.slug);

  return (
    <div>
      <h1 className="text-blue text-5xl drop-shadow font-extrabold">{title}</h1>

      <div className="text-lg text-light mt-10">
        <PortableText value={content} />
      </div>
    </div>
  );
}
