import connectDB from '../../../config/connectDB';
import Todos from '../../../models/todoModel';
import { getSession } from 'next-auth/client';

connectDB()

export default async function handler(req, res) {
    switch (req.method) {
        case "POST":
            await createTodo(req, req)
            break;
    }
}

const createTodo = async (req, res) => {
    try {
        const session = await getSession({ req })
        console.log(session);
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
}