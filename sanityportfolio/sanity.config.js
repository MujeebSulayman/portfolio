import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
//import {googleMapsInput} from '@sanity/google-maps-input'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'sanity_portfolio',

  projectId: 'u71ecgpw',
  dataset: 'production',
  token:
    'sk8bOJrLxXgMLlauthRRKHs2RWzeu3qK0zob2pNklQdzFHTLsak3obGB9e80zaAtiwmDQPctoxHxTHR6xwSnVz7FM4ocrLa3Yg58HiifOXq30bL5yHa5puldmTaoX1uhqOH7KB42vasTQiIocxP9CGjqItWCwLTMoYRW7YG5e3e73H3aAcSB',

  plugins: [
    deskTool(),
    visionTool(),
    //googleMapsInput(),
  ],

  schema: {
    types: schemaTypes,
  },
})
