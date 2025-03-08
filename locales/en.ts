import Skills from "@/app/_components/Skills";

export default {
  banner: {
    text1: "Hi, my name is",
    text2: "Mostefai Mohamed.",
    text3: "I build modern and intuitive web experiences",
    text4: `I'm a self-taught full-stack web developer specializing in JavaScript building web apps for both business and consumer use.`,
  },
  skills: {
    title: "Skills",
    subtitle: "I use...",
    skill1: {
      name: "React",
      description:
        "I primarily work with React as my main framework, and I also use Next.js with TypeScript for full-stack apps.",
    },
    skill2: {
      name: "PostgreSQL",
      description:
        "I use PostgreSQL as my go-to relational database for handling complex queries and ensuring reliable data storage in my projects.",
    },
    skill3: {
      name: "Tailwind CSS",
      description:
        "I rely on Tailwind CSS for styling, as it allows me to quickly build responsive and modern user interfaces.",
    },
    otherSkills: "Other skills..",
  },
  projects: {
    title: "Projects",
    subtitle: "My projects...",
    project1: {
      name: "RubyDash",
      description:
        "A dynamic and fully responsive blog platform that allows users to create, read, update, and delete blog posts, and includes user authentication.",
    },
    project2: {
      name: "MakeViews",
      description:
        "Make Views is a web agency that specializes in creating high-quality videos and helping clients grow their digital reach.",
    },
    project3: {
      name: "Vanity Corp",
      description:
        "A marketing agency and I'm currently working for them as a freelancer. I've helped them rebuild and migrate their website from WordPress to Next.js.",
    },
    moreProjects: "More projects...",
  },
  contact: {
    title: "Contact",
    subtitle: "Get in touch",
    button: "Contact me",
  },
  footer: {
    text: "Designed & Built by",
  },
  navbar: {
    skills: "Skills",
    projects: "Projects",
    contact: "Contact",
  },
} as const;
