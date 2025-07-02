// src/app/page.tsx
// import { client } from "@/lib/sanity.client";
// import { groq } from "next-sanity";

import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import { ContactForm } from "./components/ContactForm";

// Define the type for a project based on our schema
interface Project {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  technologies: string[];
}

interface BlogPostHome {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
}

interface SanityProjectsResponse {
  allProject: Project[];
}

interface SanityBlogPostsResponse {
  allBlogPost: BlogPostHome[];
}

// The GROQ query to fetch all documents of type "project"
// const query = groq`*[_type == "project"]{
//   _id,
//   title,
//   slug,
//   technologies
// }`;

const homePageProjectQuery = `
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

const homePageBlogQuery = `
  query AllBlogPostTitles {
    allBlogPost {
      _id
      title
      slug {
        current
      }
      shortDescription
    }
  }
`;

// This is a React Server Component
export default async function HomePage() {
  // Fetch the data
  // const projects: Project[] = await client.fetch(query);

  const projectsData =
    await sanityGraphqlRequest<SanityProjectsResponse>(homePageProjectQuery);
  const blogsData =
    await sanityGraphqlRequest<SanityBlogPostsResponse>(homePageBlogQuery);

  const projects: Project[] = projectsData?.allProject ?? [];
  const blogPosts: BlogPostHome[] = blogsData?.allBlogPost ?? [];

  return (
    <main className="max-w-4xl mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">My Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project._id} className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
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
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((blogPost) => (
          <a
            key={blogPost._id}
            className="border rounded-lg p-6"
            href={`/blog/${blogPost.slug.current}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{blogPost.title}</h2>
            <div className="text-white">{blogPost.shortDescription}</div>
          </a>
        ))}
      </div>
      <ContactForm />
    </main>
  );
}
