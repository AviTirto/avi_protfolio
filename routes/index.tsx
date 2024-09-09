import SpinningModel from "../islands/SpinningModel.tsx";
import TypingAnimation from "../islands/TypingAnimation.tsx";
import { Icon, loadIcons } from "@iconify-icon/react";
import Wave from "../components/Wave.tsx";

// preload icons
loadIcons([
  "majesticons:suitcase",
  "tabler:calendar-filled",
  "carbon:location-filled",
  "logos:deno",
  "logos:vue",
  "vscode-icons:file-type-js-official",
  "vscode-icons:file-type-js-official",
  "logos:html-5",
  "logos:css-3",
  "logos:php",
  "logos:typescript-icon",
  "skill-icons:react-dark",
  "devicon:nextjs",
  "skill-icons:nuxtjs-dark",
  "logos:nestjs",
  "logos:fresh",
  "skill-icons:laravel-dark",
  "skill-icons:tailwindcss-dark",
  "devicon:nodejs",
  "vscode-icons:file-type-mongo",
  "logos:postgresql",
  "logos:mariadb-icon",
  "skill-icons:cassandra-light",
  "skill-icons:docker",
]);

function Hero() {
  return (
    <section class="p-4 flex justify-evenly items-center flex-wrap">
      <div class="mt-8 max-w-3xl">
        <h1 class="text-4xl font-bold text-primary">
          <TypingAnimation
            strings={[
              '"Hi, I am Avi!"',
              '"I can code!"'
            ]}
            autoStart={true}
          />
        </h1>
        <p class="text-s mt-4">
        Computer Science and Data Science Major at the University of Wisconsin - Madison with experience in designing and optimizing machine learning models, developing scalable web applications, and enhancing data pipelines to minimize latency and ensure efficient data flow.
        </p>
      </div>
      {/* <SpinningModel /> */}
    </section>
  );
}

interface Value {
  title: string;
  description: string;
  image: string;
}

function Values() {
  const values: Value[] = [
    {
      title: "Statistics and Machine Learning",
      description:
        "I actively seek out new technologies and stay up-to-date with industry trends.",
      image: "/img/pexels-pixabay-159711.webp",
    },
    {
      title: "Languages and Frameworks",
      description:
        "My goal is to create user-friendly applications that solve real-world problems.",
      image: "/img/pexels-picjumbo-com-55570-196644.webp",
    },
    {
      title: "Databases",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
    {
      title: "Others",
      description:
        "I excel in team environments and communicate effectively with stakeholders.",
      image: "/img/pexels-fauxels-3184418.webp",
    },
  ];

  return (
    <>
      <div class='w-full text-center p-5 pt-20'>
        <h1 class='text-4xl font-semibold'>Skills</h1>
      </div>
      <Wave flip={false} />
      <section class="p-4 flex justify-center items-center gap-4 flex-wrap bg-primary">
        {values.map((value, i) => (
          <div
            class={"card md:h-auto md:max-w-64 bg-base-100 flex-row md:flex-col shadow-lg" +
              (i % 2 ? " md:-translate-y-8" : "")}
          >
            <figure class="w-1/3 md:h-48 md:w-auto rounded-none rounded-l-box md:rounded-none md:rounded-t-box">
              <img
                class="w-full h-full object-cover"
                src={value.image}
                alt={value.title}
              />
            </figure>
            <div class="card-body w-2/3 md:w-auto">
              <h2 class="card-title">{value.title}</h2>
              <p>{value.description}</p>
            </div>
          </div>
        ))}
      </section>
      <Wave flip={true} />
    </>
  );
}

interface Experience {
  title: string;
  company: string;
  timePeriod: string;
  location: string;
}

function Experience() {
  const experiences: Experience[] = [
    {
      title: "Data Science Intern",
      company: "Mandiri Sekuritas",
      timePeriod: "Jun 2024 - Aug 2024",
      location: "Vienna, Austria",
    },
    {
      title: "Data Analyst",
      company: "Wisconsin School of Business",
      timePeriod: "Jul 2023 - Dec 2023",
      location: "Vienna, Austria",
    },
    {
      title: "Research Assistant",
      company: "Wisconsin Institute of Discovery",
      timePeriod: "May 2023 - Jan 2024",
      location: "Vienna, Austria",
    },
    {
      title: "IT Intern",
      company: "PT Alto",
      timePeriod: "Jun 2022 - Aug 2022",
      location: "Vienna, Austria",
    },
  ];

  return (
    <section class="p-4 flex flex-wrap-reverse justify-evenly items-center gap-4">
      <div class="flex flex-col">
        {experiences.map((experience, i) => (
          <>
            {i > 0 &&
              (
                <div class="flex flex-col gap-2 ml-8 my-2">
                  {[...Array(3)].map(() => (
                    <span className="w-1 aspect-square bg-gray-500 rounded-full" />
                  ))}
                </div>
              )}

            <div class="card">
              <div class="card-body p-4">
                <h2 class="card-title">{experience.title}</h2>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="majesticons:suitcase"
                    width="none"
                    height="none"
                  />
                  {experience.company}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="tabler:calendar-filled"
                    width="none"
                    height="none"
                  />
                  {experience.timePeriod}
                </span>
                <span class="flex items-center gap-2 text-gray">
                  <Icon
                    icon="carbon:location-filled"
                    width="none"
                    height="none"
                  />
                  {experience.location}
                </span>
              </div>
            </div>
          </>
        ))}
      </div>
      <h1 class="text-3xl font-bold text-primary">Work Experience</h1>
    </section>
  );
}

interface Project {
  title: string;
  description: string;
  link: string;
  type: string;
  icon: string;
}

function Projects() {
  const projects: Project[] = [
    {
      title: "Guru AI",
      description:
        "An AI-powered course-building platform that generates personalized study tools. The platform includes a lecture search tool for answering open-ended questions, AI-generated flashcards to reinforce learning, and AI-generated summaries from notes and course documents to streamline study sessions.",
      link: "https://github.com/AviTirto/ClassroomPlatform",
      type: "Open Source",
      icon: "logos:deno",
    },
    {
      title: "Kaggle Notebooks",
      description:
        "A collection of Machine Learning models I developed on Kaggle.",
      link: "https://github.com/AviTirto/TensorFlowProjects",
      type: "Personal",
      icon: "logos:vue",
    },
    {
      title: "Midwestern University Data Analytics Competition 2024",
      description:
        "A comprehensive data analysis on the impact of fertilizer usage on crop production in Minnesota. The project involved evaluating various data sets to identify trends, correlations, and actionable insights, ultimately contributing to a better understanding of how different fertilizers affect agricultural output.",
      link: "https://github.com/AviTirto/MUDAC2024",
      type: "Personal",
      icon: "logos:vue",
    },
    {
      title: "Data Analysis ChatBot",
      description:
        "A chatbot designed to generate SQL code and visualize data, streamlining the process of querying databases and creating data-driven insights.",
      link: "https://github.com/AviTirto/SQLWriter",
      type: "Personal",
      icon: "logos:vue",
    },
    {
      title: "Password Generator",
      description:
        "A React-based website for generating secure, customizable passwords.",
      link: "https://github.com/AviTirto/PasswordGenerator",
      type: "Personal",
      icon: "logos:vue",
    },
  ];

  return (
    <section class="p-4 my-8">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Projects and Contributions
      </h1>
      <div class="flex flex-wrap justify-center items-center gap-2">
        {projects.map((project) => (
          <div class="card max-w-96">
            <div class="card-body p-4">
              <h2 class="card-title">
                <Icon
                  class="w-6 h-6"
                  icon={project.icon}
                  width="none"
                  height="none"
                />
                {project.title}
                <span class="badge badge-ghost ml-auto">{project.type}</span>
              </h2>
              <p>{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="btn btn-primary text-base-100"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Technologies() {
  const technologies = [
    "vscode-icons:file-type-js-official",
    "logos:html-5",
    "logos:css-3",
    "logos:typescript-icon",
    "skill-icons:react-dark",
    "skill-icons:tailwindcss-dark",
    "logos:deno",
    "devicon:nodejs",
    "vscode-icons:file-type-mongo",
    "logos:postgresql",
    "skill-icons:docker",
  ];

  return (
    <section class="my-16">
      <h1 class="text-3xl font-bold text-primary text-center mb-4">
        Technologies
      </h1>
      <div class="p-4 flex justify-center items-center flex-wrap gap-4">
        {technologies.map((technology) => (
          <Icon
            class="w-8 h-8"
            icon={technology}
            width="none"
            height="none"
          />
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Experience />
      <Projects />
      <Values />
      <Technologies />
    </>
  );
}
