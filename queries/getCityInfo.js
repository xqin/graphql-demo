
const db = require('./mock/db.json')

const getCityById = (id) => db.find(({ ID }) => ID === id)
const getCityInfo = (code) => db.find(({ Code }) => Code === code)
const isCityCode = (code) => /^[a-z0-9]{3,5}$/i.test(code)


const {
  GraphQLString,
  GraphQLInt,
} = require('graphql')

const CityInfo = require('../types/CityInfo')

module.exports = {
  type: CityInfo,
  description: '根据指定的城市ID/三字码返回所对应的城市基础数据',
  args: {
    id: {
      description: '城市ID',
      type: GraphQLInt
    },
    code: {
      description: '城市三字码',
      type: GraphQLString
    },
  },
  resolve (_, { id = 0, code }, { req }) {
    return new Promise((resolve) => {
      if (id > 0) {
        return resolve(getCityById(id))
      }

      if (isCityCode(code) === false) {
        return resolve()
      }

      resolve(getCityInfo(code))
    })
  }
}
