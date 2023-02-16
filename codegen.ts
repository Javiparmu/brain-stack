
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:4000/api",
  documents: "src/**/*.graphql",
  generates: {
    "src/generated/graphql.ts": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
