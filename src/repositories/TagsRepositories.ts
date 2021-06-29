import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
class TagsRepositoiries extends Repository<Tag> {}

export { TagsRepositoiries };
