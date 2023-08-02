import { strapi } from '../helpers/strapi'

export default defineEventHandler(async (event) => {
  const query = getQuery(event)

  return await strapi(`/slugify/slugs/static-page${query.slug}`)
})
