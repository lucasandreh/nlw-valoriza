import { compare } from 'bcryptjs';
import { getCustomRepository } from 'typeorm';
import { sign } from 'jsonwebtoken';

import UsersRepositories from '../repositories/UsersRepositories';

interface IUserAuthenticate {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({email, password}: IUserAuthenticate) {
        const userRepository = getCustomRepository(UsersRepositories);

        const user = await userRepository.findOne({ email });

        if(!user) {
            throw new Error("Email/Password incorrect.");
        }

        const comparePassword = await compare(password, user.password);

        if(!comparePassword) {
            throw new Error("Email/Password incorrect.");
        }

        const token = sign(
                { email: user.email }, 
                "f1d5d907c4356184878ffc21f185ce96",
                {
                    subject: user.id,
                    expiresIn: "1d"
                }
            );

            return token;


    }
}

export default AuthenticateUserService;