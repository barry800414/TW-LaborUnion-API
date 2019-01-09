const { gql } = require('apollo-server');

const typeDefs = gql`
  scalar Date

  type Query {
    laborUnions: [LaborUnion]
  }

  type LaborUnion {
    _id: String
    id: String
    name: String
    shortName: String
    shortNameEn: String
    type: UnionType
    nMembers: Int
    officialWebsite: String
    contactNo: String
    address: String
    email: String
    facebookFanPage: String
    intro: String
    recordForLabor: String
    mainAffair: String
    whyJoinUs: String
    logoImgUrl: String
    company: Company
    occupations: [Occupation]
    industries: [Industry]
    keywords: [String]
    updatedAt: Date
    createdAt: Date
  }

  type Company {
    name: String
    id: String
  }

  type Occupation {
    code: String
    name: String
  }

  type Industry {
    code: String
    name: String
  }

  enum UnionType {
    INDUSTRY
    COMPANY
    OCCUPATIONAL
  }
`;

module.exports = typeDefs;