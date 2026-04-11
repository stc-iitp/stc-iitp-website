export interface TeamData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: string;
}

export const teams: TeamData[] = [
  {
    id: "software",
    name: "Software",
    tagline: "Build & Innovate",
    description:
      "From web apps to machine learning pipelines, the Software track challenges participants to build robust, scalable solutions to real-world problems. Ideal for those who love to code and create.",
    icon: "💻",
  },
  {
    id: "hardware",
    name: "Hardware",
    tagline: "Design & Create",
    description:
      "The Hardware track brings circuits to life. Participants design, prototype, and demonstrate embedded systems, IoT devices, and electronics projects that solve tangible engineering challenges.",
    icon: "⚙️",
  },
  {
    id: "research",
    name: "Research",
    tagline: "Explore & Discover",
    description:
      "Driven by curiosity and rigor, the Research track encourages deep dives into cutting-edge topics. Teams produce well-researched papers and presentations evaluated by faculty and industry mentors.",
    icon: "🔬",
  },
];
