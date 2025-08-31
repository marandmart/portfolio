import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import ImageCarousel from "./ImageCarousel";

export interface IProjectWorkedOn {
  _key: string;
  projectTitle: string;
  projectDescription: string;
  image: {
    asset: {
      url: string;
      size: number;
      metadata: {
        lqip: string;
        dimensions: {
          width: number;
          height: number;
          aspectRatio: number;
        };
      };
    };
  };
}

interface IExperience {
  _id: string;
  company: string;
  position: string;
  type: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
  technologies: string[];
  projectsWorkedOn: IProjectWorkedOn[];
}

interface SanityExperienceResponse {
  allExperience: IExperience[];
}

const homePageExperienceQuery = `
  query AllExperience {
  allExperience (sort: {_createdAt: DESC}) {
    _id
    company
    position
    location
    type
    description
    startDate
    endDate
    current
    technologies
    projectsWorkedOn {
      _key
      projectDescription
      projectTitle
      image {
        asset {
          url
          size
          metadata {
            lqip
            dimensions {
              width
              height
              aspectRatio
            }
          }
        }
      }
    }
  }
}
`;

export default async function Experience() {
  const listItemClass =
    "bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm";

  const experiencesData = await sanityGraphqlRequest<SanityExperienceResponse>(
    homePageExperienceQuery
  );
  const experiences: IExperience[] = experiencesData?.allExperience ?? [];

  return (
    <section className="mb-16 max-w-[100%]" id="experience">
      <h2 className="text-4xl font-bold mb-2">Experience</h2>
      {experiences.map((experience) => {
        const startDate = new Date(experience.startDate).toLocaleDateString(
          "en-US",
          {
            month: "long",
            year: "numeric",
          }
        );
        const endDate = experience.current
          ? "Current"
          : new Date(experience.endDate).toLocaleDateString("en-US", {
              month: "long",
              year: "numeric",
            });
        return (
          <article
            key={experience._id}
            className="flex flex-col md:flex-row md:mt-12"
          >
            <div className="md:w-4/10 md:flex md:flex-col md:justify-center md:mr-2">
              <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
              <p className="mb-2 font-semibold">
                {experience.location} {experience.type}, {startDate} - {endDate}
              </p>
              <p className="mb-4">{experience.description}</p>
              <ul className="flex flex-wrap gap-2 mb-3">
                {experience.technologies?.map((tech) => (
                  <li key={`exp-tech-${tech}`} className={listItemClass}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <ImageCarousel
              {...experience}
              className={"mb-8 md:mb-12 md:w-6/10 md:ml-2 flex flex-col justify-center items-center min-h-36"}
            />
          </article>
        );
      })}
    </section>
  );
}
