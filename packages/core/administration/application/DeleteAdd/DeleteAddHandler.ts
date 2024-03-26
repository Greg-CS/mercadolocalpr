import CommandHandler from "../../../shared/application/CommandHandler";
import DeleteAddCommand from "./DeleteAddCommand";
import Add from "../../domain/Entities/Add";
import PostNotFoundError from "../../../marketplace/domain/Exceptions/PostNotFoundError";
import UnitOfWork from "../../../shared/application/UnitOfWork";
import { SellerId } from "../../domain/Values";

/**
 * Command handler for processing the DeletePostCommand and deleting a post.
 * It extends the base CommandHandler class.
 */
export class DeleteAddHandler extends CommandHandler {
    /**
     * Creates an instance of the DeletePostHandler class.
     * @param {UnitOfWork} unitOfWork - The unit of work for managing transactions.
     */
    constructor(private unitOfWork: UnitOfWork) {
        super();
    }

    /**
     * Handles the DeleteAddCommand by loading the post events, creating a post entity,
     * marking it as deleted, and saving the changes.
     * @param {DeleteAddCommand} cmd - The DeleteAddCommand to be handled.
     * @throws {PostNotFoundError} - Throws an error if the post with the specified ID is not found.
     */
    public async handle(cmd: DeleteAddCommand): Promise<void> {
        // Load events for the specified post ID
        let events = await this.unitOfWork.repository.loadEvents(cmd.addId);

        // If no events are found, the post does not exist
        if (events.length === 0) throw new PostNotFoundError();

        // Create a new post entity using the loaded events
        let add = new Add(events);

        // Mark the add as deleted using the user ID initiating the deletion
        add.delete(new SellerId(cmd.sellerId));

        // Save the modified add entity using the unit of work
        this.unitOfWork.save(add);
    }
}