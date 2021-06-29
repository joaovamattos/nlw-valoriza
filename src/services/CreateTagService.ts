import { getCustomRepository } from "typeorm";
import { TagsRepositoiries } from "../repositories/TagsRepositories";

class CreateTagService {
  async execute(name: string) {
    const tagsRepositoiries = getCustomRepository(TagsRepositoiries);

    if (!name) {
      throw new Error("Incorrect name");
    }

    const tagAlredyExists = await tagsRepositoiries.findOne({ name });

    if (tagAlredyExists) {
      throw new Error("Tag alredy exists");
    }

    const tag = tagsRepositoiries.create({ name });

    await tagsRepositoiries.save(tag);

    return tag;
  }
};

export { CreateTagService };