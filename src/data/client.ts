import { GraphQLClient } from 'graphql-request'

const HASHNODE_GQL = import.meta.env.HASHNODE_GQL

export const getClient = () => new GraphQLClient(HASHNODE_GQL)
