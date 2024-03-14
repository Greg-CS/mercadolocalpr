import DomainEventHandler from "../../../shared/application/DomainEventHandler";
import { AddDeletedEvent } from "../../domain/Events";
import AddReadModelAdmins from "../../domain/AddReadModelAdmins";

/**
 * Domain event handler for processing the AddDeletedEvent and updating the add read model.
 * It extends the base DomainEventHandler class.
 */
export default class DeleteAddReadModelHandler extends DomainEventHandler {
    /**
     * Creates an instance of the DeleteAddReadModelHandler class.
     * @param {AddReadModelAdmins} AddReadModelAdmins - The store for the add read model.
     */
    constructor(private AddReadModelAdmins: AddReadModelAdmins) {
        super();
    }

    /**
     * Handles the AddDeletedEvent by deleting the corresponding add read model from the store.
     * @param {AddDeletedEvent} evt - The AddDeletedEvent to be handled.
     */
    public async handle(evt: AddDeletedEvent): Promise<void> {
        // Delete the add read model from the store using the add ID from the event
        await this.AddReadModelAdmins.delete(evt.addId);
    }
}