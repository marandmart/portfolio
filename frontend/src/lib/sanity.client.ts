import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId || !dataset) {
  throw new Error(
    "Missing Sanity project ID or dataset. Check your .env.local file."
  );
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});
