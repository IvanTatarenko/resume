import { Bubble, Card } from "pixel-retroui";
import { SimpleRating } from "./components/SimpleRating";
import { ActiveText } from "./components/ActiveText";
import { useState } from "react";

const TECH = [
  { label: "TypeScript", active: false },
  { label: "React", active: false },
  { label: "Next.js", active: false },
  { label: "Nodejs", active: false },
  { label: "NestJS", active: false },
  { label: "Elasticsearch", active: false },
  { label: "PostgreSQL", active: false },
  { label: "MySQL", active: false },
  { label: "Prisma", active: false },
  { label: "TypeOrm", active: false },
  { label: "Docker", active: false },
  { label: "Docker Compose", active: false },
  { label: "OpenAI API", active: false },
  { label: "Git", active: false },
  { label: "GitHub", active: false },
  { label: "GitHub Actions", active: false },
  { label: "GitHub Pages", active: false },
  { label: "GitLab", active: false },
  { label: "Material-UI", active: false },
  { label: "Ant Design", active: false },
  { label: "Tailwind CSS", active: false },
  { label: "Styled Components", active: false },
  { label: "WordPress", active: false },
  { label: "PHP", active: false },
  { label: "Python", active: false },
  { label: "Zustand", active: false },
];

const JOBS = [
  {
    label: "NDA",
    active: false,
    info: "08.2022 — зараз",
    tech: "TypeScript/Nodejs/NestJS/Python/PostgreSQL/React/Prisma/TypeOrm/Docker/Git/GitLab/Material-UI/Ant Design/Tailwind CSS/Zustand////////////",
  },
];

const PROJECTS = [
  {
    label: "Findmovie.net",
    active: false,
    link: "https://findmovie.net/",
    tech: "TypeScript/Next/NestJS/PostgreSQL/TypeOrm/Docker/Docker Compose/OpenAI API/Git/GitHub/GitHub Actions/Next.js",
  },
  {
    label: "Roots.in.ua",
    active: false,
    link: "https://roots.in.ua/",
    tech: "TypeScript/NestJS/React/PostgreSQL/Elasticsearch/TypeOrm/Docker/Docker Compose/Git/GitHub/GitHub Actions/Material-UI/Ant Design/Styled Components/Next.js",
  },
  {
    label: "Halas.news",
    active: false,
    link: "https://web.archive.org/web/20250514030238/https://halas.news/",
    tech: "TypeScript/Next.js/NestJS/React/PostgreSQL/Prisma/Docker/Docker Compose/Git/GitHub/Ant Design/Tailwind CSS",
  },
  {
    label: "Cebro.com.ua",
    active: false,
    link: "",
    tech: "WordPress/PHP/MySQL",
  },
  {
    label: "Osint links",
    active: false,
    link: "https://ivantatarenko.github.io/osint_links/#/search-engines",
    tech: "TypeScript/React/Git/GitHub/GitHub Actions/GitHub Pages",
  },
];

export default function App() {
  const [tech, setTech] = useState(TECH);

  const toggleTech = (label: string) => {
    setTech((prev) =>
      prev.map((item) =>
        item.label === label ? { ...item, active: !item.active } : item
      )
    );
  };

  const toggleManyTech = (labels: string[] | string) => {
    const labelsArray = Array.isArray(labels)
      ? labels
      : labels.split("/").map((l) => l.trim());

    labelsArray.forEach((label) => toggleTech(label));
  };

  return (
    <div
      style={{
        margin: "20px auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "770px",
      }}
    >
      <Card
        bg="black"
        textColor="white"
        borderColor="white"
        shadowColor="white"
        className="p-2"
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >
          <div>
            <h1
              style={{
                margin: "0 0 8px 0",
              }}
            >
              # Іван Татаренко
            </h1>
            <img
              src="/resume/images/photo.png"
              alt="Фото Івана"
              style={{
                width: "100px",
                height: "100px",
                imageRendering: "pixelated",
                border: "3px solid white",
              }}
            />
          </div>
          <Bubble
            direction="left"
            bg="black"
            textColor="white"
            borderColor="white"
          >
            Привіт, я шукаю Part-time роботу.
          </Bubble>
        </div>
        <SimpleRating label=" A2 - рівень англійської" rating={2} symbol="*" />
        <SimpleRating
          label="2+ роки - комерційного досвіду"
          rating={3}
          symbol="*"
        />
        <SimpleRating label="600$ - бажана зп" rating={1} symbol="$" />
      </Card>

      <Card
        bg="black"
        textColor="white"
        borderColor="white"
        shadowColor="white"
        className="p-2"
      >
        <h2 style={{ margin: "0 0 8px 0" }}>## Технології</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}
        >
          {tech.map((item) => (
            <ActiveText
              key={item.label}
              label={item.label}
              isActive={item.active}
            />
          ))}
        </div>
      </Card>

      <Card
        bg="black"
        textColor="white"
        borderColor="white"
        shadowColor="white"
        className="p-2"
      >
        <p>## Досвід</p>
        <p>### Проєкти</p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "8px",
          }}
        >
          {PROJECTS.map((project) => (
            <div key={project.label}>
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => toggleManyTech(project.tech)}
                  onMouseLeave={() => toggleManyTech(project.tech)}
                  style={{
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  {project.label}
                </a>
              ) : (
                <span
                  onMouseEnter={() => toggleManyTech(project.tech)}
                  onMouseLeave={() => toggleManyTech(project.tech)}
                >
                  {project.label}
                </span>
              )}
            </div>
          ))}
        </div>
        <p style={{ marginTop: "15px" }}>## Робота</p>
        <div
          style={{
            gap: "8px",
          }}
        >
          {JOBS.map((job) => (
            <div key={job.label}>
              <span
                onMouseEnter={() => toggleManyTech(job.tech)}
                onMouseLeave={() => toggleManyTech(job.tech)}
              >
                {job.label} - {job.info}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Контакти */}
      <Card
        bg="black"
        textColor="white"
        borderColor="white"
        shadowColor="white"
        className="p-2"
      >
        <p>### Контакти</p>
        <p>Telegram: +38 063 777 32 85</p>
        <p>
          Email: <a href="mailto:vakummail@gmail.com">vakummail@gmail.com</a>
        </p>
        <p>
          GitHub:{" "}
          <a href="https://github.com/IvanTatarenko">
            github.com/IvanTatarenko
          </a>
        </p>
      </Card>
    </div>
  );
}
