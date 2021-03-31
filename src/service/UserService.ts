import { User } from "../models/User";
import { UserRepository } from "../repository/UserRepository";

export default class UserService {

    userRepository: UserRepository = new UserRepository();

    public async save(user: User){
        console.log(`Salvando usuário ${user.getEmail()}`)
        return this.userRepository.save(user);
    }

}