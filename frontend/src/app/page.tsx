import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import { ContactForm } from "./components/ContactForm";
import Link from "next/link";
import Image from "next/image";
import GithubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";
import Projects from "./components/Projects";

interface BlogPostHome {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  shortDescription: string;
}

interface SanityBlogPostsResponse {
  allBlogPost: BlogPostHome[];
}

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
  const blogsData =
    await sanityGraphqlRequest<SanityBlogPostsResponse>(homePageBlogQuery);

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
            <Image src={GithubIcon} alt={"Github Icon"} width={36} height={36} />
          </Link>
          <Link
            href={"https://www.linkedin.com/in/mario-andre-martins/"}
            target={"_blank"}
            className="inline-block"
          >
            <Image
              src={LinkedInIcon}
              alt={"LinkedIn Icon"}
              width={36}
              height={36}
            />
          </Link>
        </div>
      </section>
      <Projects />
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
