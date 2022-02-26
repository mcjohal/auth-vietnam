import React, {useState,useEffect} from 'react';
import {  getSession } from 'next-auth/client';
import Nav from '../components/Nav';
import { Fragment } from 'react';
import TodoInput from '../components/TodoInput';
import axios from 'axios';
import TodoItem from '../components/TodoItem';
import { toast } from 'react-toastify';


const Home = ({ session }) => {
  const [todos,setTodos] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        setLoading(true);
        const res = await axios.get('/api/todo');
        setTodos(res.data);
        setLoading(false);        
      } catch (err) {
        console.log(err);
        toast.error(err.response.data.msg)
      }     
    }
    fetchTodo();
  },[]);
  if (!session) return null;
  return (
    <Fragment>
        <Nav/>
        <main>
          <TodoInput/>
          <div>
            {
              todos.map(todo =>(
                <TodoItem key={todo._id} todo={todo}/>
              ))
            }
          </div>
            {loading && <h2>Loading...</h2>}
        </main>
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