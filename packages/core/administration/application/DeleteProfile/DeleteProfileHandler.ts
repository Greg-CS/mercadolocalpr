import CommandHandler from "../../../shared/application/CommandHandler";
import DeleteProfileCommand from "./DeleteProfileCommand";
import Profile from "../../../marketplace/domain/Entities/Profile/Profile";
import ProfileNotFoundError from "../../../marketplace/domain/Exceptions/ProfileNotFoundError";
import UnitOfWork from "../../../shared/application/UnitOfWork";
import { ProfileId } from "../../domain/Values";

/**
 * Command handler for processing the DeleteProfileCommand and deleting a post.
 * It extends the base CommandHandler class.
 */
export class DeleteProfileHandler extends CommandHandler {
    /**
     * Creates an instance of the DeletePostHandler class.
     * @param {UnitOfWork} unitOfWork - The unit of work for managing transactions.
     */
    constructor(private unitOfWork: UnitOfWork) {
        super();
    }

    /**
     * Handles the DeleteProfileCommand by loading the profile events, creating a profile entity,
     * marking it as deleted, and saving the changes.
     * @param {DeleteProfileCommand} cmd - The DeleteProfileCommand to be handled.
     * @throws {ProfileNotFoundError} - Throws an error if the profile with the specified ID is not found.
     */
    public async handle(cmd: DeleteProfileCommand): Promise<void> {
        // Load events for the specified post ID
        let events = await this.unitOfWork.repository.loadEvents(cmd.profileId);

        // If no events are found, the post does not exist
        if (events.length === 0) throw new ProfileNotFoundError();

        // Create a new post entity using the loaded events
        let profile = new Profile(events);

        // Mark the profile as deleted using the user ID initiating the deletion
        profile.delete(new ProfileId(cmd.profileId));

        // Save the modified profile entity using the unit of work
        this.unitOfWork.save(profile);
    }
}