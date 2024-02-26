import PostModule from "./module";
import { getPostModels, getPostRepository } from "./infrastructure/persistence";
import UnitOfWork from "./application/UnitOfWork";

/**
 * Factory function for creating an instance of the PostModule.
 * @param {any} config - Configuration object.
 * @returns {PostModule} - An instance of the PostModule.
 */
export default function createPostModule(config: any): PostModule {
    // Retrieve PostRepository and PostModels based on the provided configuration.
    const postRepository = getPostRepository(config.db);
    const postModels = getPostModels(config.db);
    
    // Create a new UnitOfWork instance with the retrieved PostRepository.
    const unitOfWork = new UnitOfWork(postRepository);

    // Instantiate and return a new PostModule with the created UnitOfWork and PostModels.
    return new PostModule(unitOfWork, postModels);
}
