import express from 'express';
import { signUp, register } from "../controllers/authentication.collections"; 

const authRoutes = express.Router();

authRoutes.post('/signup', signUp); 
authRoutes.post('/register', register);

export default authRoutes;
