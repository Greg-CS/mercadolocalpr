import PostModel from "./Models/PostModel";

/**
 * Interface representing a store for managing Post read models.
 */
export default interface PostReadModelStore {
    /**
     * Adds a Post read model to the store.
     * @param {PostModel} post - The PostModel instance to be added.
     * @returns {Promise<void>} - A promise that resolves once the add operation is complete.
     */
    add(post: PostModel): Promise<void>;

    /**
     * Deletes a Post read model from the store using its unique identifier.
     * @param {string} postId - The unique identifier of the Post read model to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the delete operation is complete.
     */
    delete(postId: string): Promise<void>;
}
