import { EntityRepository, Repository } from "typeorm";
import Tag from "../models/Tag";

@EntityRepository(Tag)
class TagsRepositories extends Repository<Tag> {}

export default TagsRepositories;