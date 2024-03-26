import DomainEventHandler from "../../../shared/application/DomainEventHandler";
import { ProfileDeletedEvent } from "../../domain/Events";
import ProfileReadModelStore from "../../../marketplace/domain/ProfileReadModelStore";

/**
 * Domain event handler for processing the ProfileDeletedEvent and updating the profile read model.
 * It extends the base DomainEventHandler class.
 */
export default class DeleteProfileReadModelHandler extends DomainEventHandler {
    /**
     * Creates an instance of the DeleteProfileReadModelHandler class.
     * @param {ProfileReadModelStore} ProfileReadModelStore - The store for the profile read model.
     */
    constructor(private ProfileReadModelStore: ProfileReadModelStore) {
        super();
    }

    /**
     * Handles the ProfileDeletedEvent by deleting the corresponding profile read model from the store.
     * @param {ProfileDeletedEvent} evt - The ProfileDeletedEvent to be handled.
     */
    public async handle(evt: ProfileDeletedEvent): Promise<void> {
        // Delete the profile read model from the store using the profile ID from the event
        await this.ProfileReadModelStore.delete(evt.profileId);
    }
}