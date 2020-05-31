import db from '../db/mongo.ts';
import IUser from "../entities/IUser.ts";

class UsersRepository {
  usersCollection = db.collection('users');

  constructor() {
  }

  async find() {
    const users = await this.usersCollection.find();
    return users;
  }

  async insertOne(user: IUser) {
    const {$oid} = await this.usersCollection.insertOne(user);
    return $oid;
  }
}

export default UsersRepository;
