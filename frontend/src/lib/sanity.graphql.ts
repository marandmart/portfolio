/**
 * A reusable function to fetch data from the Sanity GraphQL endpoint.
 * @param query The GraphQL query string
 * @returns The `data` object from the GraphQL response
 */
export async function sanityGraphqlRequest<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T | null> {
  const SANITY_GRAPHQL_URL = process.env.SANITY_GRAPHQL_URL;

  if (!SANITY_GRAPHQL_URL) {
    throw new Error("SANITY_GRAPHQL_URL is not defined");
  }

  try {
    const response = await fetch(SANITY_GRAPHQL_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`GraphQL request failed: ${response.statusText}`);
    }

    const { data }: { data: T } = await response.json();
    return data;
  } catch (error) {
    console.error("There was an error with the GraphQL request:", error);
    return null;
  }
}
