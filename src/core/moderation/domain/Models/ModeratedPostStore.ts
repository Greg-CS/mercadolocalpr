import DomainEvent from "@/core/shared/domain/DomainEvent";
import Post from "../Entities/Post";

/**
 * ModeratedPostStore defines the contract for storing moderated posts and retrieving new events.
 */
export default interface ModeratedPostStore {
    /**
     * Adds a moderated post to the store.
     * @param {Post} post - The moderated post to be added.
     * @returns {Promise<void>} - A Promise that resolves once the operation is complete.
     */
    add(post: Post): Promise<void>;

    /**
     * Retrieves new events related to moderated posts.
     * @returns {DomainEvent[]} - An array of new domain events.
     */
    getNewEvents(): DomainEvent[];
}
