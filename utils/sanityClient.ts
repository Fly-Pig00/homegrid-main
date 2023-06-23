import sanityClient from "@sanity/client";
import { apiVersion, dataset, projectId, token } from '../sanity/env'

const sanityApiClient = sanityClient(
  {
    projectId,
    dataset,
    apiVersion, // use current UTC date - see "specifying API version"!
    token, // or leave blank for unauthenticated usage
    useCdn: false, // `false` if you want to ensure fresh data
  }
  );

export default sanityApiClient;