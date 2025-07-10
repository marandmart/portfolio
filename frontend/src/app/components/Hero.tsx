import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../../public/github.svg";
import LinkedInIcon from "../../../public/linkedin.svg";

export default function Hero() {
  return (
    <section className="h-[100vh] flex flex-col justify-center align-middle pb-16 w-full md:w-[50%]">
      <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center">
        Mario Martins
      </h2>
      <h3 className="text-center mb-2 text-2xl md:text-3xl font-medium md:pb-4">Software Developer</h3>
      <p className="mb-8 text-base md:text-lg font-medium sm:text-center md:hidden">Building performant, pixel-perfect and accessible web applications.</p>
      <div className="flex flex-row align-middle justify-center gap-12">
        <Link href={"https://www.github.com/marandmart/"} target={"_blank"} className="inline-block">
          <Image src={GithubIcon} alt={"Github Icon"} width={36} height={36} />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/mario-andre-martins/"}
          target={"_blank"}
          className="inline-block"
        >
          <Image
            src={LinkedInIcon}
            style={{ backgroundColor: "white", borderRadius: "8px" }}
            alt={"LinkedIn Icon"}
            width={36}
            height={36}
          />
        </Link>
      </div>
    </section>
  );
}
