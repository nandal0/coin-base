import sanityClient from '@sanity/client'

export const client = sanityClient({
  projectId: '0v7nk7hy',
  dataset: 'production',
  apiVersion: '2022-12-06', // use current UTC date - see "specifying API version"!
  token:
    'skqUqfP0svoyatEHMVQlO3EJ4Z71mGD4lNyeqQwHYNcQdYkkcSROL65errvuVdKQN33rTVetAuHFZUVeQ8HQ0mxRrfBsEWMGcyh5qHwpmIk7RpO6as7ApumLxBHxgMznPzjNQBqSAkBpoVXgQd7UaN7lLbP0y2CaqTUVAck9NpaW6bbxbZL5', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
})
