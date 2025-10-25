export default function TechStack() {
  const techStack = [
    "Next.js (Frontend & Fullstack projects)",
    "Vite/ReactJs",
    "Firebase",
    "TypeScript",
    "Tailwind CSS",
    "Shadcn UI",
    "React Query",
    "BetterAuth (Authentication)",
    "tRPC (Type-safe API layer for client–server communication)",
    "Postgres (Supabase, NeonDB)",
    "Drizzle ORM & Prisma ORM (Communicating with databases)",
    "GSAP & Framer Motion (Animation)",
    "Inngest (Background Jobs)",
  ];

  return (
    <div className="lg:p-6">
      <ul className="grid grid-cols-1 lg:grid-cols-2">
        {techStack.map((tech, index) => (
          <li
            key={index}
            className="p-3 border shadow-sm hover:shadow-md transition"
          >
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
}
