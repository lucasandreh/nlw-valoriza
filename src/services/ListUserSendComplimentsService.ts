import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import ComplimentsRepositories from "../repositories/ComplimentsRepositories";


class ListUserSendComplimentService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentsRepositories);

        const complimentList = await complimentRepository.find(
            { 
                where: { user_sender: user_id },
                relations: ["userSender", "userReceiver", "tag"] 
            });

        return classToPlain(complimentList);
    }
}

export default ListUserSendComplimentService;