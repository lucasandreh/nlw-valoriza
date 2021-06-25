import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import ComplimentsRepositories from "../repositories/ComplimentsRepositories";

class ListUserReceiveComplimentsService {
    async execute(user_id: string) {
        const complimentRepository = getCustomRepository(ComplimentsRepositories);

        const complimentList = await complimentRepository.find(
            {
                 where: { user_receiver: user_id },
                 relations: ["userSender", "userReceiver", "tag"] 
            });

        return classToPlain(complimentList);
    }


}

export default ListUserReceiveComplimentsService;