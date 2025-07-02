import { sanityGraphqlRequest } from "@/lib/sanity.graphql";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";

interface BlogPost {
  title: string;
  bodyRaw: PortableTextBlock[];
}

interface SanityBlogPostResponse {
  allBlogPost: BlogPost[];
}

const blogPostQuery = `
    query BlogPostQuery($slug: String!) {
        allBlogPost(where: {slug: {current: {eq: $slug}}}) {
            title
            bodyRaw
        }
    }
`;

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const data = await sanityGraphqlRequest<SanityBlogPostResponse>(
    blogPostQuery,
    { slug }
  );
  const blogPost: BlogPost | undefined = data?.allBlogPost?.[0];

  if (!blogPost) {
    return <div>Blog post not found</div>;
  }

  return (
    <main className="max-w-3xl mx-auto p-8">
      <article>
        <h1 className="text-4xl font-bold mb-8">{blogPost.title}</h1>
        <div className="prose prose-invert lg:prose-xl">
          <PortableText value={blogPost.bodyRaw} />
        </div>
      </article>
    </main>
  );
}
