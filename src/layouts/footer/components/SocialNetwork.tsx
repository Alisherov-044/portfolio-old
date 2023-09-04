import parse from "html-react-parser";
import Link from "next/link";
import { SocialNetworkInterface } from "@/utils/types";

export function SocialNetwork({ socialNetwork }: SocialNetworkInterface) {
  const { icon, link } = socialNetwork;

  return (
    <Link href={link} className="social__icon">
      {parse(icon)}
    </Link>
  );
}
