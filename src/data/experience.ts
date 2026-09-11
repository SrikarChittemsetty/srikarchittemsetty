export type Experience = {
  company: string;
  role: string;
  /** Employment type, shown next to the dates. Mirrors LinkedIn's separate field. */
  type?: "Internship" | "Part-time" | "Full-time" | "Contract";
  location: string;
  start: string;
  end: string;
  href: string;
  logo: string;
};

export const experience: Experience[] = [
  {
    company: "ForkLaunch",
    role: "Software Engineer, Infrastructure & Platform",
    type: "Internship",
    location: "San Francisco, CA",
    start: "Jun 2026",
    end: "Present",
    href: "https://forklaunch.com",
    logo: "/experience/forklaunch.svg",
  },
];
