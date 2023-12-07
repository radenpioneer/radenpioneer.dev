import { gql } from 'graphql-request'
import { getClient } from './client'

const HOSTNAME = new URL(import.meta.env.SITE).hostname
const client = getClient()

export const getPostBySlug = async (slug: string) =>
  client.request(
    gql`
      query PostBySlug($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            title
            subtitle
            coverImage {
              url
            }
            content {
              html
            }
          }
        }
      }
    `,
    {
      host: HOSTNAME,
      slug,
    }
  )
