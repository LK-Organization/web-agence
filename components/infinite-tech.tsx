import React from "react";
import Image from "next/image";
const techStack = [
  {
    name: "Next.js",
    href: "https://nextjs.org",
    link: "/techs/nextjs.svg",
  },
  {
    name: "Tailwind",
    href: "https://tailwindcss.com",
    link: "/techs/tailwind.svg",
  },
  {
    name: "Astro",
    href: "https://astro.build",
    link: "/techs/astro.svg",
  },
  {
    name: "WordPress",
    href: "https://wordpress.org",
    link: "/techs/wordpress.svg",
  },
  {
    name: "Figma",
    href: "https://figma.com",
    link: "/techs/figma.svg",
  },
  {
    name: "React",
    href: "https://react.dev",
    link: "/techs/react.svg",
  },
  {
    name: "Google Analytics",
    href: "https://analytics.google.com",
    link: "/techs/google-analytics.svg",
  },
  {
    name: "WooCommerce",
    href: "https://woocommerce.com",
    link: "/techs/woocommerce.svg",
  },
  {
    name: "Semrush",
    href: "https://semrush.com",
    link: "/techs/semrush.svg",
  },
  {
    name: "Postgresql",
    href: "https://postgresql.org",
    link: "/techs/postgresql.svg",
  },
  {
    name: "googlesearchconsole",
    href: "https://search.google.com/search-console",
    link: "/techs/googlesearchconsole.svg",
  },
];

export default function InfiniteTech() {
  return (
    <div
      className="w-full text-5xl py-8 inline-flex flex-nowrap overflow-hidden bg-[red]/0
 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)] "
    >
      <ul className="flex bg-transparent items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll">
        {techStack.map((tech, index) => (
          <li key={index}>
            <a
              target="_blank"
              rel="noreferrer"
              href={tech.href}
              className="text-primary-foreground text-2xl grid place-content-center rounded-md hover:opacity-90 transition-opacity"
              aria-label={tech.name}
            >
              <Image
                className="w-20 md:w-24"
                src={tech.link}
                alt={tech.name}
                width={100}
                height={100}
              />
            </a>
          </li>
        ))}
        {/* Duplicate for seamless looping */}
        {techStack.map((tech, index) => (
          <li key={`dup-${index}`} aria-hidden="true">
            <a
              tabIndex={-1}
              href={tech.href}
              className=" text-primary-foreground text-2xl grid place-content-center rounded-md"
            >
              <Image
                className="w-20 md:w-24"
                src={tech.link}
                alt={tech.name}
                width={100}
                height={100}
              />
            </a>
          </li>
        ))}
      </ul>

      <ul
        className="flex items-center justify-center md:justify-start sm:[&_li]:mx-8 [&_li]:mx-4 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        {techStack.map((tech, index) => (
          <li key={`mirror-${index}`}>
            <a
              tabIndex={-1}
              href={tech.href}
              className="text-primary-foreground text-2xl grid place-content-center  rounded-md"
            >
              <Image
                className="w-20 md:w-24"
                src={tech.link}
                alt={tech.name}
                width={100}
                height={100}
              />
            </a>
          </li>
        ))}
        {/* Duplicate for seamless looping */}
        {techStack.map((tech, index) => (
          <li key={`dup-mirror-${index}`}>
            <a
              tabIndex={-1}
              href={tech.href}
              className=" text-primary-foreground text-2xl grid place-content-center  rounded-md"
            >
              <Image
                className="w-20 md:w-24"
                src={tech.link}
                alt={tech.name}
                width={100}
                height={100}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
