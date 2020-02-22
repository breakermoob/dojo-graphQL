module.exports = {
   Query: {
      posts: (_,__,{dataSources})=>{
         dataSources.postAPI.getAllPost()
      }
   }
}