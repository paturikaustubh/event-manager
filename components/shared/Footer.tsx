import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" border-t">
      <div className="flex-center wrapper flex-between gap-4 p-5 text-center sm:flex-row flex-col">
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt="logo"
            width={128}
            height={38}
          />
        </Link>
        <p>2023 Eventure. All Rights Reserved</p>
      </div>
    </footer>
  );
}
