import {signOut} from 'next-auth/client';
const Home = () => {
  return (
    <div>
      <button onClick={() => signOut()}>signOut</button>
    </div>
  )
}

export default Home