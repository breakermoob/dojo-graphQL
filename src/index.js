const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const postApi = require('./data_source/post-api');

const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources: ()=> new postApi()
});

server.listen().then(({url})=>{
   console.log(`Server OnFire ${url}`);
})

