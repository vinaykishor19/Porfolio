import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = sanityClient({
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: process.env.REACT_APP_SANITY_TOKEN,
    token:''
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);