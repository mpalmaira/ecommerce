import { ImageUrlBuilder } from "@sanity/image-url";
import sanityClient from "@sanity/client";

//create sanity client
const client = sanityClient({
  projectId: "",
  dataset: "",
  apiVersion: "",
  useCdn: true,
  token: "",
});
