
const express = require('express')
const app = express()

const { PORT = 5000 } = process.env


const {
  GraphQLSchema,
  GraphQLObjectType,
} = require('graphql')

// 手工引入 要注册的 Query,
const getCityInfo = require('./queries/getCityInfo.js')

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'GraphQL Demo',
    fields: {
      getCityInfo
    }
  })
})


const graphqlHTTP = require('express-graphql')
// 注册 graphql 的路由
app.use('/graphql', graphqlHTTP((req, res, params) => ({
  schema,
  context: {req, res, params, startTime: Date.now()},
  pretty: true,
  graphiql: true
})))

app.listen(PORT, () => {
  console.log(`url: http://127.0.0.1:${PORT}/graphql`)
  console.log('GraphQL Demo Ready ...')
})

