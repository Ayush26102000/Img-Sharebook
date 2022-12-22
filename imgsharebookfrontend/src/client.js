import sanityClient from '@sanity/client';
import imageUrlBuider from '@sanity/image-url';

export const client = sanityClient({
    projectId:'',
    dataset:'production',
    apiVersion: '2022-12-22',
    useCdn:true,
    token:'',
});

const builder = imageUrlBuider(client);

export const urlFor = (source) => builder.image(source);

