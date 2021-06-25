import { Request, Response } from "express";
import ListUserSendComplimentService from "../services/ListUserSendComplimentsService";


class ListUserSendComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const listUserSendComplimentsService = new ListUserSendComplimentService();

        const complimentList = await listUserSendComplimentsService.execute(user_id);

        return response.status(200).json(complimentList);
    }
}

export default ListUserSendComplimentsController;