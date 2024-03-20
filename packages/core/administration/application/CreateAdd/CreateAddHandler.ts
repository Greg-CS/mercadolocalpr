import CommandHandler from "../../../shared/application/CommandHandler";
import CreateAddCommand from "./CreateAddCommand";
import Add from "../../domain/Entities/Add";
import ModerationAPI from "../../domain/ModerationAPI";
import UnitOfWork from "../../../shared/application/UnitOfWork";

/**
 * Command handler for processing the CreateAddCommand and creating a new add.
 * It extends the base CommandHandler class.
 */
export default class CreateAddHandler extends CommandHandler {
    /**
     * The unit of work for managing transactions.
     * @private
     * @type {UnitOfWork}
     */
    private unitOfWork: UnitOfWork;

    /**
     * The Moderation API for handling add moderation.
     * @private
     * @type {ModerationAPI}
     */
    private moderationApi: ModerationAPI;

    /**
     * Creates an instance of the CreateAddHandler class.
     * @param {UnitOfWork} unitOfWork - The unit of work for managing transactions.
     * @param {ModerationAPI} moderationApi - The Moderation API for handling add moderation.
     */
    constructor(unitOfWork: UnitOfWork, moderationApi: ModerationAPI) {
        super();
        this.unitOfWork = unitOfWork;
        this.moderationApi = moderationApi;
    }

    /**
     * Handles the CreateAddCommand by creating a new add entity.
     * If the add with the specified ID already exists, the command is ignored.
     * @param {CreateAddCommand} cmd - The CreateAddCommand to be handled.
     * @returns {Promise<void>} - A Promise that resolves when the handling is complete.
     */
    public async handle(cmd: CreateAddCommand): Promise<void> {
        // Check if a post with the specified ID already exists
        let existingPostEvents = await this.unitOfWork.repository.loadEvents(cmd.postId);

        if (existingPostEvents.length === 0) {
            // Create a new Add entity using the provided data
            let add = Add.create(
                cmd.postId,
                cmd.title,
                cmd.description,
                cmd.price,
                cmd.location,
                cmd.sellerId,
                cmd.category,
                cmd.photoUrl,
            );

            // Send the add for moderation using the Moderation API
            add.moderate(this.moderationApi);

            // Save the new add entity using the unit of work
            await this.unitOfWork.save(add);
            
            // Commit changes
            this.unitOfWork.commit();
        }
    }
}