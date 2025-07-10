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
      metadata: {
        dimensions: {
          width: number;
          height: number;
        };
      };
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
          metadata {
            dimensions {
              width
              height
            }
          }
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
      className="flex flex-col gap-8 mb-16"
      id="projects"
    >
      <h2 className="text-4xl font-semibold mb-2">Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => {
          return ( 
            <article key={project._id}>
              <Image
                src={project.mainImage.asset.url}
                alt={project.title}
                width={project.mainImage.asset.metadata.dimensions.width}
                height={project.mainImage.asset.metadata.dimensions.height}
                className="w-full h-auto rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 mt-2">{project.title}</h3>
              <p className="mb-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies?.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link href={project.projectUrl} target="_blank" className="inline-block border-2 rounded-full border-white px-2 py-1 mb-2 mr-2">
                Live Demo
              </Link>
              <Link href={project.githubUrl} target="_blank" className="inline-block border-2 rounded-full border-white px-2 py-1">
                Source Code
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
