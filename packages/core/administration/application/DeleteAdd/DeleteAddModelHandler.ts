import DomainEventHandler from "../../../shared/application/DomainEventHandler";
import { PostDeletedEvent } from "../../domain/Events";
import PostReadModelAdmin from "../../domain/PostReadModelAdmins";

/**
 * Domain event handler for processing the PostDeletedEvent and updating the post read model.
 * It extends the base DomainEventHandler class.
 */
export default class DeletePostReadModelHandler extends DomainEventHandler {
    /**
     * Creates an instance of the DeletePostReadModelHandler class.
     * @param {PostReadModelAdmin} PostReadModelAdmin - The store for the post read model.
     */
    constructor(private PostReadModelAdmin: PostReadModelAdmin) {
        super();
    }

    /**
     * Handles the PostDeletedEvent by deleting the corresponding post read model from the store.
     * @param {PostDeletedEvent} evt - The PostDeletedEvent to be handled.
     */
    public async handle(evt: PostDeletedEvent): Promise<void> {
        // Delete the post read model from the store using the post ID from the event
        await this.PostReadModelAdmin.delete(evt.postId);
    }
}