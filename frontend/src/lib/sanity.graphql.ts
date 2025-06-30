/**
 * A reusable function to fetch data from the Sanity GraphQL endpoint.
 * @param query The GraphQL query string
 * @returns The `data` object from the GraphQL response
 */
export async function sanityGraphqlRequest(query: string) {
  const SANITY_GRAPHQL_URL = process.env.NEXT_PUBLIC_SANITY_GRAPHQL_URL;

  if (!SANITY_GRAPHQL_URL) {
    throw new Error("NEXT_PUBLIC_SANITY_GRAPHQL_URL is not defined");
  }

  try {
    const response = await fetch(SANITY_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error with the GraphQL request:", error);
    return null;
  }
}
