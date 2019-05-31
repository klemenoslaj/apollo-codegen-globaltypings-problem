module.exports = {
  client: {
    service: {
      name: 'example',
      localSchemaFile: 'schema.graphql'
    },
    includes: ['projects/**/*.ts', 'src/**/*.ts'],
  },
};
