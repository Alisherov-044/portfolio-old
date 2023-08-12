import Link from "next/link";
import Image from "next/image";
import { SocialNetworkInterface } from "@/utils/types";

export function SocialNetwork({ link, icon }: SocialNetworkInterface) {
  return (
    <Link href={link} className="social__icon">
      <Image src={icon} width={20} height={20} alt="social icon" />
    </Link>
  );
}
