import Post from "../domain/Entities/Post";
import PostRepository from "../domain/PostRepository";
import AbstractUnitOfWork from "@/core/shared/application/UnitOfWork";

/**
 * Unit of Work class for managing transactions involving the Post entity.
 * It extends the base AbstractUnitOfWork class.
 */
export default class UnitOfWork extends AbstractUnitOfWork {
    /**
     * Creates an instance of the UnitOfWork class.
     * @param {PostRepository} posts - The repository for managing Post entities.
     */
    constructor(public posts: PostRepository) {
        super();
    }

    /**
     * Performs the actual saving of the Post entity using the PostRepository.
     * @param {Post} entity - The Post entity to be saved.
     * @throws {Error} - Throws an error if the saving process fails.
     */
    public async doSave(entity: Post): Promise<void> {
        // Save the Post entity using the PostRepository
        await this.posts.save(entity);
    }
}
