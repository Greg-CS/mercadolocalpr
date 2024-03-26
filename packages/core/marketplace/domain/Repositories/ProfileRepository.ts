import DomainEvent from "../../../shared/domain/DomainEvent";
import Post from "../Entities/Post/Post";

/**
 * Interface representing a repository for managing Profile entities.
 */
export default interface ProfileRepository {
    /**
     * Loads the events associated with a specific Profile using its unique identifier.
     * @param {string} id - The unique identifier of the Profile.
     * @returns {Promise<DomainEvent[]>} - A promise that resolves to an array of DomainEvent instances.
     */
    loadEvents(id: string): Promise<DomainEvent[]>;

    /**
     * Saves a Profile entity to the repository.
     * @param {Post} post - The Post entity to be saved.
     * @returns {Promise<void>} - A promise that resolves once the save operation is complete.
     */
    save(post: Post): Promise<void>;
}
