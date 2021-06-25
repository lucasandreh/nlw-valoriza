import { Request, Response, NextFunction } from 'express';
import { getCustomRepository } from 'typeorm';
import UsersRepositories from '../repositories/UsersRepositories';

async function ensureAdmin(request: Request, response: Response, next: NextFunction) {
        const { user_id } = request;
        const userRepository = getCustomRepository(UsersRepositories);    

        const { admin } = await userRepository.findOne({ where: { id: user_id } });

        if(admin) {
            return next();
        }

        return response.status(401).json({ error: "User is not admin" });
}

export default ensureAdmin;