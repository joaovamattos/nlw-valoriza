import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import { hash } from "bcryptjs";

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrect");
    }

    const userAlredyExists = await usersRepositories.findOne({
      email,
    });

    if (userAlredyExists) {
      throw new Error("User alredy exits");
    }

    const passwordHash = await hash(password, 8);

    const user = usersRepositories.create({
      name,
      email,
      password: passwordHash,
      admin,
    });

    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserService };
