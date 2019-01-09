const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = {
  Query: {
    laborUnions: () => ([{
      _id: 'id in db',
      id: '12345678',
      name: '台灣電子電機資訊產業工會',
      shortName: '電資工會',
      shortNameEn: 'TUEEIT',
      type: 'INDUSTRIAL',
      nMembers: 100,
      officialWebsite: 'http://www.tueeit.org.tw',
      contactNo: '03-6570655',
      address: '30268 新竹縣竹北市縣政二路606號',
      email: 'TUEEIT@gmail.com',
      facebookFanPage: 'https://www.facebook.com/TUEEIT/',
      intro: 'intro',
      recordForLabor: 'recordForLabor',
      mainAffair: 'mainAffair',
      whyJoinUs: 'whyJoinUs',
      logoImgUrl: 'http://',
      industries: [
        {
          name: 'EE',
          code: '1001',
        }
      ],
      keywords: [
        '軟體工程師',
      ],
      updatedAt: new Date(),
      createdAt: new Date(),
    }]),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});

