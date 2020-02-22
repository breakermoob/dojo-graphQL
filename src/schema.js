const { gql } = require('apollo-server');

//Funcion
//! es como un campo requerido, para evitar los null, pueden llegar pero vacios
//Tags Functions usamos los backticks para definir los esquemas
const typeDefs = gql`
   type Post{
      id: ID!
      title: String
      body: String
      comments: [Comment]!


   }
   type Comment{
      id: ID!
      name: String
      email: String
      body: String
   }

   type Query{
      posts:[Post]!
   }
`

module.exports = typeDefs;