import DomainEvent from "../domain/DomainEvent";
import { Entity } from "../domain/Entity";

/**
 * AbstractUnitOfWork class represents an abstract unit of work for managing transactions.
 * It provides methods for saving entities and handling domain events.
 */
export default abstract class AbstractUnitOfWork {
    private eventsToProcess: DomainEvent[];

    /**
     * Creates an instance of the AbstractUnitOfWork class.
     */
    constructor() {
        this.eventsToProcess = [];
    }

    /**
     * Saves the provided entity, processes its events, and clears the entity's events.
     * @param {Entity} entity - The entity to be saved.
     * @throws {Error} - Throws an error if the doSave method is not implemented by the concrete subclass.
     */
    public async save(entity: Entity): Promise<void> {
        await this.doSave(entity);

        this.eventsToProcess = this.eventsToProcess.concat(entity.getEvents());

        entity.clearEvents();
    }

    /**
     * Performs the actual saving of the entity.
     * Subclasses must implement this method to handle the specific saving logic.
     * @param {Entity} entity - The entity to be saved.
     */
    public async doSave(entity: Entity): Promise<void> {
        // Implementation specific to the concrete subclass
    };

    /**
     * Retrieves and clears the domain events that need to be processed.
     * @returns {DomainEvent[]} - The array of domain events to be processed.
     */
    public getEventsToProcess(): DomainEvent[] {
        let events = this.eventsToProcess;

        this.eventsToProcess = [];

        return events;
    }
}
