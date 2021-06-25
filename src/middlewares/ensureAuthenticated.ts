import { Request, Response, NextFunction } from 'express';

import { verify } from 'jsonwebtoken';

interface IPayload {
    sub: string;
}

async function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    // Receber Token de autenticação
    const authToken = request.headers.authorization;
    
    if(!authToken) {
        return response.status(401).end();
    }

    const [, token ] = authToken.split(" ");

    try {
        const { sub} = verify(token, "f1d5d907c4356184878ffc21f185ce96") as IPayload;
        request.user_id = sub;

        return next();
    }catch(err) {
        return response.status(401).end();
    }

}

export default ensureAuthenticated;