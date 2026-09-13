import { Router } from 'express';
import {getAllUsers, getUserById, createUser} from '../controller/user.controller.ts';

const routerUsers = Router();

routerUsers.get('/',getAllUsers);
routerUsers.get('/:id',getUserById);
routerUsers.post('/', createUser);

export default routerUsers;
