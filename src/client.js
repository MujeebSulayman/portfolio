import sanityClient from '@sanity/client';

export default sanityClient({
  projectId: 'u71ecgpw', // find this at manage.sanity.io or in your sanity.json
  dataset: 'production', // this is from those question during 'sanity init'
  useCdn: true,
  token:
    'skZcR2Bre5EAAfnFs5iXojaSCe1FoQrGOMeZ9TDioOg0f5UVWReaI3Ii9KBBqDkKIq0LhDhh3onKo0M4yRi8cTG8INvnG5pP0GuqPXOKdrHyqK9rJr6714QiKQiLjQORmQbWTfucLDCtI93f8l3ERGV6oWdgzhTtdDNA34J7XyYOxEDccvS4',
});
