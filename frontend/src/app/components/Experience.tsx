import { sanityGraphqlRequest } from "@/lib/sanity.graphql";

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
    <section className="mb-16" id="experience">
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
          <article key={experience._id}>
            <h3 className="text-2xl font-bold mb-2">{experience.company}</h3>
            <p className="mb-2 font-semibold">
              {experience.location} {experience.type}, {startDate} - {endDate}
            </p>
            <p className="mb-4">{experience.description}</p>
            <ul className="flex flex-wrap gap-2 mb-8">
              {experience.technologies?.map((tech) => (
                <li key={`exp-tech-${tech}`} className={listItemClass}>
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        );
      })}
    </section>
  );
}
