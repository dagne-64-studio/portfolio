const skills = [
  {
    category: "Frontend Development",
    description: "Creating responsive and accessible interfaces.",
    items: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Programming",
    description: "Developing programming and problem-solving skills.",
    items: ["Python", "Java", "PHP"],
  },
  {
    category: "Database",
    description: "Learning to organize and manage application data.",
    items: ["SQL"],
  },
];

const projects = [
  {
    number: "01",
    name: "SevenHome",
    category: "Super Platform",
    description:
      "A super-platform project concept bringing communication, social content, search, shopping, and AI-powered features together.",
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL"],
    status: "In Development",
    symbol: "S",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    number: "02",
    name: "AI Voice Receptionist",
    category: "Artificial Intelligence",
    description:
      "An AI-powered receptionist concept designed to help businesses handle incoming calls and improve customer availability.",
    technologies: ["JavaScript", "Node.js", "PostgreSQL"],
    status: "In Development",
    symbol: "AI",
    accent: "from-violet-400 to-purple-600",
  },
  {
    number: "03",
    name: "AI Document Assistant",
    category: "AI Application",
    description:
      "An application concept for uploading documents and asking questions about their contents.",
    technologies: ["Next.js", "TypeScript", "AI"],
    status: "Learning Project",
    symbol: "D",
    accent: "from-emerald-400 to-teal-500",
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
        {label}
      </span>

      <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>

      <p className="mt-4 leading-7 text-slate-400">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#080d19] text-slate-100">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080d19]/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 font-bold text-slate-950">
              DB
            </div>

            <div>
              <span className="block font-bold tracking-tight text-white">
                Dagne Balcha
              </span>
              <span className="text-xs text-slate-400">
                Software Engineering Student
              </span>
            </div>
          </a>

          <div className="hidden items-center gap-7 text-sm text-slate-300 md:flex">
            <a href="#home" className="transition hover:text-cyan-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-cyan-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-cyan-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-cyan-400">
              Projects
            </a>
            <a href="#education" className="transition hover:text-cyan-400">
              Education
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-cyan-400/40 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
          >
            Contact Me
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="home"
        className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-12"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative grid w-full items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-4 py-2 text-sm text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Open to learning, collaboration and opportunities
            </div>

            <p className="mb-4 text-lg text-slate-400">
              Hello, my name is
            </p>

            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Dagne Balcha
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Alemu.
              </span>
            </h1>

            <h2 className="mt-6 text-xl font-medium text-slate-200 sm:text-2xl">
              Software Engineering Undergraduate
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I am an aspiring full-stack developer passionate about building
              useful digital products, exploring artificial intelligence, and
              turning ideas into practical software solutions.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
              >
                Explore My Projects ↗
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/50 hover:bg-white/5"
              >
                Get in Touch
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
              <span>📍 Ethiopia</span>
              <span>🎓 Software Engineering</span>
              <a
                href="https://github.com/dagne-64-studio"
                target="_blank"
                rel="noreferrer"
                className="transition hover:text-cyan-400"
              >
                GitHub ↗
              </a>
            </div>
          </div>

          {/* Profile illustration */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-violet-500/20 blur-2xl" />

            <div className="relative rounded-[2rem] border border-white/10 bg-[#101829] p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <span className="text-sm text-slate-400">Developer Profile</span>
                <span className="text-xs font-semibold text-cyan-300">
                  PORTFOLIO
                </span>
              </div>

              <div className="py-10 text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-violet-600 p-1 shadow-lg shadow-blue-500/20">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-[#101829] text-5xl font-bold tracking-tight text-white">
                    DB
                  </div>
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  Dagne Balcha
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Aspiring Full-Stack Developer
                </p>

                <div className="mt-7 flex flex-wrap justify-center gap-2">
                  {["Web Development", "Software Engineering", "AI"].map(
                    (interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs text-slate-300"
                      >
                        {interest}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.06] p-4">
                <p className="text-sm leading-6 text-slate-300">
                  &quot;Learn continuously. Build practically. Improve every
                  day.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="About Me"
            title="Learning today. Building for tomorrow."
            description="My journey in software engineering is driven by curiosity, practical projects, and a desire to solve real-world problems."
          />

          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-2xl border border-white/10 bg-[#101829] p-7 sm:p-9">
              <h3 className="text-xl font-bold text-white">
                A little about me
              </h3>

              <p className="mt-5 leading-8 text-slate-400">
                I am a Software Engineering undergraduate at Dambi Dollo
                University. I enjoy exploring how websites and applications
                work, developing my programming skills, and learning how
                different technologies come together to create useful
                products.
              </p>

              <p className="mt-4 leading-8 text-slate-400">
                My interests include frontend and backend development,
                databases, and AI applications. I am building projects to
                strengthen my understanding and prepare for future internship,
                freelance, and software engineering opportunities.
              </p>

              <a
                href="mailto:dagnubalcha@gmail.com"
                className="mt-7 inline-flex items-center gap-2 font-semibold text-cyan-300 transition hover:text-cyan-200"
              >
                Let&apos;s connect <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-2xl border border-white/10 bg-[#101829] p-6">
                <span className="text-2xl" aria-hidden="true">💡</span>
                <h3 className="mt-4 font-bold text-white">My Interests</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Full-stack web development, AI applications, and practical
                  software solutions.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#101829] p-6">
                <span className="text-2xl" aria-hidden="true">🚀</span>
                <h3 className="mt-4 font-bold text-white">My Goal</h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Become a capable software engineer by learning, building,
                  and improving through practice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Technical Skills"
            title="Tools I'm learning and using."
            description="My current programming and web development skills, organized by area."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {skills.map((skill, index) => (
              <article
                key={skill.category}
                className="rounded-2xl border border-white/10 bg-[#101829] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400/20 to-blue-500/20 text-lg font-bold text-cyan-300">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {skill.category}
                </h3>

                <p className="mt-3 min-h-12 text-sm leading-6 text-slate-400">
                  {skill.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="My Projects"
            title="Ideas becoming real projects."
            description="A selection of personal software projects and learning initiatives. Projects marked in development are ongoing, not completed products."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#101829] transition duration-300 hover:-translate-y-1 hover:border-white/20"
              >
                <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[#0c1322]">
                  <div className={`absolute h-32 w-32 rounded-full bg-gradient-to-br ${project.accent} opacity-20 blur-3xl`} />

                  <div className={`relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${project.accent} text-3xl font-bold text-slate-950 shadow-2xl transition duration-300 group-hover:scale-110`}>
                    {project.symbol}
                  </div>

                  <span className="absolute left-5 top-5 text-xs font-medium uppercase tracking-widest text-slate-500">
                    PROJECT {project.number}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                    {project.category}
                  </span>

                  <h3 className="mt-3 text-xl font-bold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-md bg-white/[0.05] px-2.5 py-1.5 text-xs text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-5">
                    <span className="inline-flex items-center gap-2 text-sm text-amber-300">
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      {project.status}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href="https://github.com/dagne-64-studio"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              Explore My GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        id="education"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            label="Education"
            title="Building my foundation."
            description="My current academic journey in software engineering."
          />

          <div className="max-w-3xl rounded-2xl border border-white/10 bg-[#101829] p-7 sm:p-9">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-400/10 text-2xl">
                🎓
              </div>

              <div className="flex-1">
                <span className="text-sm font-medium text-cyan-300">
                  Undergraduate Education
                </span>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  Software Engineering
                </h3>

                <p className="mt-2 text-slate-300">
                  Dambi Dollo University
                </p>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Currently developing knowledge of programming, application
                  development, databases, and software engineering principles.
                </p>

                <div className="mt-5 inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300">
                  Expected graduation: 2028
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.06] bg-gradient-to-b from-cyan-500/[0.06] to-transparent px-5 py-24 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-4xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-400">
            Contact Me
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let&apos;s build something meaningful.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-400">
            I welcome conversations about software development, collaborative
            projects, internships, and opportunities to learn and grow.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:dagnubalcha@gmail.com"
              className="rounded-xl bg-cyan-400 px-6 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              ✉ Email Me
            </a>

            <a
              href="https://github.com/dagne-64-studio"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/15 px-6 py-3.5 font-semibold text-white transition hover:border-cyan-400/40 hover:text-cyan-300"
            >
              GitHub ↗
            </a>
          </div>

          <p className="mt-7 text-sm text-slate-500">
            dagnubalcha@gmail.com
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-5 py-7 sm:px-8 lg:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Dagne Balcha Alemu.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <a href="#home" className="transition hover:text-cyan-300">
              Back to top ↑
            </a>

            <a
              href="https://github.com/dagne-64-studio"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}