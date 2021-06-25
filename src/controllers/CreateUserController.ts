import { Request, Response } from 'express';
import CreateUserService from '../services/CreateUserService';

import { hash } from 'bcryptjs';

class CreateUserController {

    async handle(request: Request, response: Response) {

        const { name, email, password, admin } = request.body;

        const createUserService = new CreateUserService();

        const hashedPassword = await hash(password, 8);

        const user = await createUserService.execute({
            name, 
            email,
            password: hashedPassword,
            admin
        });

        return response.status(200).json(user);
    }
}

export default CreateUserController;