import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

//Client safe config
const config = {
  projectId: "w7db94t2",
  dataset: "production",
  apiVersion: "2025-09-23",
  useCdn: false,
};

export const client = createClient(config);

//Admin level client, used for backend
// admin client for mutations
const adminConfig = {
  ...config,
  token: process.env.SANITY_API_TOKEN,
};

export const adminClient = createClient(adminConfig);

// Image URL builder
const builder = ImageUrlBuilder(config);
export const urlFor = (source: string) => builder.image(source);
