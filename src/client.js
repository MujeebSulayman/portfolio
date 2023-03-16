import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'u71ecgpw', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  useCdn: true,
  token:
    'sk8bOJrLxXgMLlauthRRKHs2RWzeu3qK0zob2pNklQdzFHTLsak3obGB9e80zaAtiwmDQPctoxHxTHR6xwSnVz7FM4ocrLa3Yg58HiifOXq30bL5yHa5puldmTaoX1uhqOH7KB42vasTQiIocxP9CGjqItWCwLTMoYRW7YG5e3e73H3aAcSB',
});
