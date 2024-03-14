import Add from "./Entities/Add";
import DomainEvent from "../../shared/domain/DomainEvent";

/**
 * Interface representing a repository for managing Add entities.
 */
export default interface AddRepository {
    /**
     * Loads the events associated with a specific Add using its unique identifier.
     * @param {string} id - The unique identifier of the Add.
     * @returns {Promise<DomainEvent[]>} - A promise that resolves to an array of DomainEvent instances.
     */
    loadEvents(id: string): Promise<DomainEvent[]>;

    /**
     * Saves a Add entity to the repository.
     * @param {Add} add - The Add entity to be saved.
     * @returns {Promise<void>} - A promise that resolves once the save operation is complete.
     */
    save(add: Add): Promise<void>;
}
