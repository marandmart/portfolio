import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import { ContactForm } from "./components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";

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

export default async function HomePage() {
  const projectsData =
    await sanityGraphqlRequest<SanityProjectsResponse>(homePageProjectQuery);
  const blogsData =
    await sanityGraphqlRequest<SanityBlogPostsResponse>(homePageBlogQuery);

  const projects: Project[] = projectsData?.allProject ?? [];
  const blogPosts: BlogPostHome[] = blogsData?.allBlogPost ?? [];

  return (
    <main className="max-w-4xl mx-auto p-8">
      <section className="h-[calc(100vh-56px)] flex flex-col justify-center align-middle pb-16">
        <h2 className="text-6xl font-semibold mb-4 text-center">
          I&apos;m Mario Martins
        </h2>
        <p className="mb-6 text-lg sm:text-center">A software developer building efficient and scalable application.</p>
        <div className="flex flex-row align-middle justify-center gap-12">
          <Link href={"https://www.github.com/marandmart/"} target={"_blank"} className="inline-block">
            <Image src={GithubIcon} alt={"Github Icon"} width={48} height={48} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mario-andre-martins/"}
            target={"_blank"}
            className="inline-block"
          >
            <Image
              src={LinkedInIcon}
              alt={"LinkedIn Icon"}
              width={48}
              height={48}
            />
          </Link>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="projects">
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
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog">
        {blogPosts.map((blogPost) => (
          <Link
            key={blogPost._id}
            className="border rounded-lg p-6"
            href={`/blog/${blogPost.slug.current}`}
          >
            <h2 className="text-2xl font-semibold mb-2">{blogPost.title}</h2>
            <div className="text-white">{blogPost.shortDescription}</div>
          </Link>
        ))}
      </section>
      <ContactForm />
    </main>
  );
}
