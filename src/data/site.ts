import type { Publication } from './schema'
import { gql } from 'graphql-request'
import { getClient, HOSTNAME } from './client'

const client = getClient()

export const getSiteSettings = async () =>
  client.request(
    gql`
      query SiteSettings($host: String!) {
        publication(host: $host) {
          title
          about {
            text
          }
          favicon
        }
      }
    `,
    {
      host: HOSTNAME,
    }
  )

export type SiteSettings = {
  publication: Pick<Publication, 'title' | 'about' | 'favicon'>
}
