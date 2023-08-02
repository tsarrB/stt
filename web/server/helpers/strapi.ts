import { ofetch } from 'ofetch'

const config = useRuntimeConfig()

const strapi = ofetch.create({
  baseURL: `${config.STRAPI_URL}/api`,
  headers: {
    Authorization: `Bearer ${config.STRAPI_TOKEN}`,
  },
})

export { strapi }
