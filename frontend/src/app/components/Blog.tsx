import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import Link from "next/link";

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

export default async function BlogPosts() {
  const blogsData =
    await sanityGraphqlRequest<SanityBlogPostsResponse>(homePageBlogQuery);

  const blogPosts: BlogPostHome[] = blogsData?.allBlogPost ?? [];
  
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8" id="blog">
      <h2 className="text-4xl font-semibold mb-2">Blog Posts</h2>
      {blogPosts.map((blogPost) => (
        <Link key={blogPost._id} className="border rounded-lg p-6" href={`/blog/${blogPost.slug.current}`}>
          <h2 className="text-2xl font-semibold mb-2">{blogPost.title}</h2>
          <div className="text-white">{blogPost.shortDescription}</div>
        </Link>
      ))}
    </section>
  );
}