import { GraphQLClient } from 'graphql-request'

const HASHNODE_GQL = import.meta.env.HASHNODE_GQL

export const HOSTNAME = new URL(import.meta.env.SITE).hostname
export const getClient = () => new GraphQLClient(HASHNODE_GQL)
