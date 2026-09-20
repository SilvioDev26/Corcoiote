import { Router } from 'express';
import {getAllUsers, getUserById, createUser,updateUser,deleteUser} from '../controller/user.controller.ts';

const routerUsers = Router();

routerUsers.get('/',getAllUsers);
routerUsers.get('/:id',getUserById);
routerUsers.post('/', createUser);
routerUsers.put('/:id', updateUser);
routerUsers.delete('/:id', deleteUser);

export default routerUsers;
