import { getCustomRepository } from "typeorm";
import TagsRepositories from "../repositories/TagsRepositories";
import { classToPlain } from 'class-transformer';


class ListTagService {
    async execute() {
        const tagRepository = getCustomRepository(TagsRepositories);

        const tags = await tagRepository.find();

        return classToPlain(tags);
    }
}

export default ListTagService;