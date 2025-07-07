import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import Image from "next/image";
import Link from "next/link";

interface Project {
  _id: string;
  title: string;
  technologies: string[];
  shortDescription: string;
  projectUrl: string;
  githubUrl: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
}

interface SanityProjectsResponse {
  allProject: Project[];
}

const homePageProjectQuery = `
  query AllProjects {
  allProject (sort: {_createdAt: DESC}) {
      _id
      title
      technologies
      shortDescription
      projectUrl
      githubUrl
      mainImage {
        asset {
          url
        }
      }
    }
  }
`;

export default async function Projects() {
  const projectsData =
    await sanityGraphqlRequest<SanityProjectsResponse>(homePageProjectQuery);
  const projects: Project[] = projectsData?.allProject ?? [];

  return (
    <section
      className="grid grid-cols-1 mb-8 md:grid-cols-2 gap-8"
      id="projects"
    >
      <h2 className="text-4xl font-semibold mb-2">Projects</h2>
      {projects.map((project) => {
        return (
          <div key={project._id} className="">
            <Image
              src={project.mainImage.asset.url}
              alt={project.title}
              width={500}
              height={500}
            />
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p>{project.shortDescription}</p>
            <Link href={project.projectUrl} target="_blank" className="block">
              See Live Demo
            </Link>
            <Link href={project.githubUrl} target="_blank" className="block">
              See Source Code
            </Link>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        );
      })}
    </section>
  );
}
