import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://gql.hashnode.com',
  generates: {
    'src/data/schema.ts': {
      plugins: ['typescript'],
    },
  },
}

export default config
