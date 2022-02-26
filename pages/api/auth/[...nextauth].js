import NextAuth from "next-auth";
import Providers from "next-auth/providers";



export default NextAuth({
  // Configure one or more authentication providers
  session:{
      jwt:true
  },
  providers: [
    Providers.Google({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET
      }),
      Providers.Facebook({
        clientId: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_CLIENT_SECRET
      }),
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET
      })
  ],
  pages:{
    signIn:'/login'
  },
  database:process.env.DATABASE_URL,
  callbacks:{
    //session variable has to be placed before user if this is going to work.
    session: async(session, user)=> {
       console.log({session,user})
      session.userId = user.sub
   
      return Promise.resolve(session);
    }
  }
})