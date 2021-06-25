import { getCustomRepository } from 'typeorm';
import TagsRepositories from '../repositories/TagsRepositories';

class CreateTagService {
    async execute(name: string) {
        const tagRepository = getCustomRepository(TagsRepositories);

        if(!name) {
            throw new Error("Name is empty.");
        }

        const tagAlreadyExists = await tagRepository.findOne({ name });

        if(tagAlreadyExists) {
            throw new Error("Tag already exists.");
        }

        const tag = tagRepository.create({
            name
        });

        await tagRepository.save(tag);

        return tag;
    }
}

export default CreateTagService;