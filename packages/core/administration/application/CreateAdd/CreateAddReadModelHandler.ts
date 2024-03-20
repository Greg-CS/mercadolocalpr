import DomainEventHandler from "../../../shared/application/DomainEventHandler";
import { AddCreatedEvent } from "../../domain/Events";
import AddReadModelAdmins from "../../domain/AddReadModelAdmins";
import AddModel from "../../domain/Models/AddModel";

/**
 * Domain event handler for processing the AddCreatedEvent and updating the add read model.
 * It extends the base DomainEventHandler class.
 */
export default class CreateAddReadModelHandler extends DomainEventHandler {
    /**
     * Creates an instance of the CreateAddReadModelHandler class.
     * @param {AddReadModelAdmins} addReadModelAdmins - The store for the add read model.
     */
    constructor(private addReadModelAdmins: AddReadModelAdmins) {
        super();
    }

    /**
     * Handles the AdddCreatedEvent by creating a new add read model and adding it to the store.
     * @param {AdddCreatedEvent} evt - The AdddCreatedEvent to be handled.
     */
    public async handle(evt: AddCreatedEvent): Promise<void> {
        // Create a new add read model using the data from the event
        let model = new AddModel(
            evt.id,
            evt.title,
            evt.description,
            Number(evt.price),
            evt.sellerId,
            evt.photoUrl,
            false,  // not moderated
            true, 
            evt.timestamp
        );

        // Add the new add read model to the store/admin
        await this.addReadModelAdmins.add(model);
    }
}
