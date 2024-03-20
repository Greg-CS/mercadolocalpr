import AddModel from "./Models/AddModel";

/**
 * Interface representing a store for managing Post read models.
 */
export default interface AddReadModelAdmins {
    /** 
    * Adds a Add read model to the store.
    * @param {AddModel} post - The AddModel instance to be added.
    * @returns {Promise<void>} - A promise that resolves once the add operation is complete.
    */

    add(post: AddModel): Promise<void>;
    
    /**
     * Deletes a Post read model from the store using its unique identifier.
     * @param {string} postId - The unique identifier of the Post read model to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the delete operation is complete.
     */
    delete(postId: string): Promise<void>;

    /**
     * Get a Post read model from the store using its unique identifier.
     * @param {string} postId - The unique identifier of the Post read model to be deleted.
     * @returns {Promise<AddModel>} - A promise that resolves once the get operation is complete.
     */
    get(postId: string): Promise<AddModel|null>;

        /**
     * Update a Post read model from the store using its unique identifier.
     * @param {string} postId - The unique identifier of the Post read model to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the update operation is complete.
     */
    update(post: AddModel): Promise<void>;
}