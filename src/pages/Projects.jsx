import { Link } from "react-router-dom";
import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { useEffect, useRef, useState } from "react";

const ProjectCard = ({ project, isVisible }) => {
  return (
    <div
      className={`flex flex-col items-center gap-6 bg-white p-6 lg:p-8 rounded-2xl shadow-xl transition-all duration-500 transform
        ${isVisible ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      style={{ width: '100%', maxWidth: '600px', height: 'auto' }}
    >
      {/* Project Info */}
      <div className="flex flex-col items-center text-center">
        <div className="block-container w-20 h-20 mb-4 flex justify-center items-center">
          <div className={`btn-back rounded-xl ${project.theme}`} />
          <div className="btn-front rounded-xl flex justify-center items-center p-2">
            <img
              src={project.iconUrl}
              alt={project.name}
              className="w-full h-full object-contain"
              style={project.style?.icon}
            />
          </div>
        </div>

        <h4 className="text-2xl lg:text-3xl font-poppins font-semibold">
          {project.name}
        </h4>
        <p className="mt-4 text-slate-500 text-base lg:text-lg leading-relaxed">
          {project.description}
        </p>
        <div className="mt-5 flex justify-center items-center gap-2 font-poppins">
          <Link
            to={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
          >
            Live Link
          </Link>
          <img
            src={arrow}
            alt="arrow"
            className="w-4 h-4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [visibleProject, setVisibleProject] = useState(0);
  const observerRef = useRef(null);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.findIndex(ref => ref.contains(entry.target));
            if (index !== -1) setVisibleProject(index);
          }
        });
      },
      { threshold: 0.5 }
    );

    observerRef.current = observer;

    projectRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-container py-16 px-4 lg:px-16">
      {/* Header Section */}
      <div className="text-center lg:text-left mb-12">
        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
          My{" "}
          <span className="blue-gradient_text font-semibold">
            Projects
          </span>
        </h1>
        <p className="text-slate-500 mt-4 text-lg max-w-3xl mx-auto lg:mx-0 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so if
          you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further enhancements.
          Your collaboration is highly valued!
        </p>
      </div>

      {/* Projects List */}
      <div className="flex flex-col gap-12">
        {projects.map((project, index) => (
          <div
            key={project.name}
            ref={el => projectRefs.current[index] = el}
            className="min-h-screen flex items-center justify-center"
          >
            <ProjectCard
              project={project}
              isVisible={index === visibleProject}
            />
          </div>
        ))}
      </div>

      <hr className="border-slate-200 mt-16" />
      <CTA />
    </section>
  );
};

export default Projects;