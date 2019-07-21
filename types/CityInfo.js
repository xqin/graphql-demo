
const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt,
} = require('graphql')

module.exports = new GraphQLObjectType({
  name: 'CityInfo',
  description: '城市基础数据实体',
  fields: {
    Code: {
      description: '城市三字码',
      type: GraphQLString
    },
    CountryID: {
      description: '城市ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    ID: {
      description: '城市ID',
      type: new GraphQLNonNull(GraphQLInt)
    },
    Name: {
      description: '城市中文名',
      type: GraphQLString
    },
    CountryCode: {
      description: '城市所在国家二字码',
      type: GraphQLString
    }
  }
})
