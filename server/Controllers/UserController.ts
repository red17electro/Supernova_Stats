import UserService from '../services/UserService.ts';
import {RouterContext} from 'https://deno.land/x/oak/mod.ts';

const userService = new UserService();

export const getUsers = async (context: RouterContext) => {
  context.response.body = await userService.getUsers();
};

export const createUser = async (context: RouterContext) => {
  const {request, response} = context;

  if (!request.hasBody) {
    response.status = 400;
    response.body = {
      msg: 'Invalid user data'
    };
    return;
  }

  const {value: {username, password}} = await request.body();

  const userId = await userService.createUser({username, password});

  response.body = {msg: 'User created', userId};
};
