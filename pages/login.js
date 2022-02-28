import { useEffect } from 'react';
import {providers,getSession,csrfToken} from 'next-auth/client';
import OAuth from '../components/auth/OAuth';
import Router from 'next/router';

const Login = ({ providers, session, csrfToken }) => {
    console.log('csrfToken:' ,{csrfToken})

    useEffect(() => {
      if(session) return Router.push('/');
    },[session])
    if(session) return null;

  return (
    <div className="d-flex jusify-content-center align-items-center"
    style={{minHeight:'100vh'}}>
      <div style={{maxWidth: '450px', width:'100%'}}
      className="border border-1 max-auto p-4 shadow">

        <h2 className="text-center fw-bolder text-uppdercase"
        style={{color:'555', letterSpacing:'1px'}}>Test Auth</h2>

        <p className="text-center">Login with NextAuth</p>
        <OAuth providers={providers} csrfToken={csrfToken}/>
       
    </div>
    </div>
  )
}

Login.getInitialProps = async (context) => {
    return {
      providers: await providers(context),
      session: await getSession(context),
      csrfToken: await csrfToken(context),
    };
}
export default Login