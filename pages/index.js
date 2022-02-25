import {  getSession } from 'next-auth/client';
import Nav from '../components/Nav';
import { Fragment } from 'react';


const Home = ({ session }) => {
  console.log(session);
  if (!session) return null;
  return (
    <Fragment>
        <Nav/>
    </Fragment>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }
  return {
    props:{session}
  }
}

export default Home