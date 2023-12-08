import type { Publication } from './schema'
import { gql } from 'graphql-request'
import { getClient, HOSTNAME } from './client'

const client = getClient()

export const getPostBySlug = async (slug: string) =>
  client.request(
    gql`
      query PostBySlug($host: String!, $slug: String!) {
        publication(host: $host) {
          post(slug: $slug) {
            title
            subtitle
            publishedAt
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

export const getPosts = async () =>
  client.request(
    gql`
      query Posts($host: String!) {
        publication(host: $host) {
          posts(first: 12) {
            edges {
              node {
                title
                subtitle
                slug
                brief
              }
            }
          }
        }
      }
    `,
    {
      host: HOSTNAME,
    }
  )

export type PostBySlug = { publication: Pick<Publication, 'post'> }
export type Posts = { publication: Pick<Publication, 'posts'> }
