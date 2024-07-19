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

const Post = ({ params: { slug = "" } }) => {
  const { loading, error, data } = useQuery(query, { variables: { slug } });

  const { allPost } = data;
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
