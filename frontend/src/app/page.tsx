// src/app/page.tsx
// import { client } from "@/lib/sanity.client";
// import { groq } from "next-sanity";

import { sanityGraphqlRequest } from "@/lib/sanity.graphql";

// Define the type for a project based on our schema
interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  technologies: string[];
}

// The GROQ query to fetch all documents of type "project"
// const query = groq`*[_type == "project"]{
//   _id,
//   title,
//   slug,
//   technologies
// }`;

const query = `
  query AllProjects {
    allProject {
      _id
      title
      slug {
        current
      }
      technologies
    }
  }
`;

// This is a React Server Component
export default async function HomePage() {
  // Fetch the data
  // const projects: Project[] = await client.fetch(query);

  const data = await sanityGraphqlRequest(query);
  const projects: Project[] = data.allProject;

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies?.map((tech) => (
                <span key={tech} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}