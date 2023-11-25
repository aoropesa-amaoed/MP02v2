import sanityClient from "@sanity/client";


const client = sanityClient({
  projectId: 'ume527nb',
  dataset: 'production',
  useCdn: false, 
  apiVersion: '2023-05-03',
  token: import.meta.env.VITE_PUBLIC_SANITY_TOKEN,
});



export default client;