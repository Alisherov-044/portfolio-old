import Link from "next/link";
import Image from "next/image";
import { ProjectInterface } from "@/utils/types";
import { ArrowIcon } from "@/assets/icons";

export function Project({ project }: ProjectInterface) {
  const { image, title, description, link } = project;

  return (
    <Link href={link} target="_blank" className="project__card">
      <div className="project__card--image">
        <Image src={image} width={870} height={400} alt="project imaage" />
      </div>
      <div className="project__card--content">
        <h2 className="project__card--title">{title}</h2>
        <p className="project__card--description">{description}</p>
      </div>
      <div className="project__card--icon">
        <ArrowIcon />
      </div>
    </Link>
  );
}
