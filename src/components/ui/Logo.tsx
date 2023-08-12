import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <Link href="/" className="logo">
      <Image src="/logo.svg" width={197} height={40} alt="logo" priority />
    </Link>
  );
}
