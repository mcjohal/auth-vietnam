import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { html, text } from "../../../utils/htmlEmail";
import nodemailer from "nodemailer";
import connectDB from '../../../config/connectDB';
import Users from '../../../models/users';

connectDB();
export default NextAuth({
  // Configure one or more authentication providers
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      name:'Credentials',
      async authorize(credentials,req){
        console.log(credentials)
        const email = credentials.email;
        const password = credentials.password;
        
        const user = await Users.findOne({email})
        if(user) return loginUser({email,password})
        return registrerUser({email,password})
      }
    }),
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    Providers.Facebook({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    Providers.Email({
      // https://www.google.com/settings/security/lesssecureapps
      // https://myaccount.google.com/
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      async sendVerificationRequest({
        identifier: email,
        url,
        provider: { server, from },
      }) {
        const { host } = new URL(url);
        const transport = nodemailer.createTransport(server);
        await transport.sendMail({
          to: email,
          from,
          subject: `Sign in to ${host}`,
          text: text({ url, host }),
          html: html({ url, host, email }),
        });
      },
    }),
  ],
 ///  pages:{
  ///   signIn:'/login'
  ///  },
  database: process.env.DATABASE_URL,
  callbacks: {
    //session variable has to be placed before user if this is going to work.
    session: async (session, user) => {
      console.log({ session, user });
      session.userId = user.sub;

      return Promise.resolve(session);
    },
  },
});

const loginUser = async ({email,password}) => {
  if(!user.password){
    throw new Error("Accounts have to login with OAuth or Email")
  }
}
const registerUser = async ({email,password}) => {

}