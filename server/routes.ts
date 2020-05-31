import {Router} from 'https://deno.land/x/oak/mod.ts';
import {createUser, getUsers} from "./Controllers/UserController.ts";

const router = new Router();

router
  .get('/users', getUsers)
  .post('/users', createUser);

export default router;
