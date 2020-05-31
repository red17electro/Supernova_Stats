import UserRepository from '../repositories/UsersRepository.ts';
import IUser from "../entities/IUser.ts";

class UserService {
  readonly userRepository = new UserRepository();

  constructor() {
  }

  getUsers = async () => {
    return await this.userRepository.find();
  };

  createUser = async (user: IUser) => {
    return await this.userRepository.insertOne(user);
  };

}

export default UserService;
