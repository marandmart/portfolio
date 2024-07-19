// post.tsx
"use client";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query PostBySlug($slug: String) {
    allPost(where: { slug: { current: { eq: $slug } } }) {
      title
      author {
        name
      }
      publishedAt
      bodyRaw
    }
  }
`;

interface Span {
  marks: string[];
  text: string;
  _key: string;
  _type: string;
}

interface Block {
  markDefs: any[];
  children: Span[];
  _type: string;
  style: string;
  _key: string;
}

interface Author {
  __typename: string;
  name: string;
}

interface Post {
  __typename: string;
  title: string;
  author: Author;
  publishedAt: string;
  bodyRaw: Block[];
}

interface AllPost {
  allPost: Post[];
}

const Post = ({ params: { slug = "" } }) => {
  const { loading, error, data } = useQuery(query, { variables: { slug } });

  const { allPost } = data as AllPost;
  const {
    title = "",
    author: { name = "" } = {},
    publishedAt = "",
    bodyRaw = [],
  } = allPost.length > 0 ? allPost[0] : {};

  return (
    <article>
      {loading && <h1>Loading...</h1>}
      {error && <h1>There was an error try again later</h1>}
      <h1>{title}</h1>
      <h2>{name}</h2>
      <span>{publishedAt}</span>
      <p>{bodyRaw[0].children[0].text}</p>
    </article>
  );
};

export default Post;
