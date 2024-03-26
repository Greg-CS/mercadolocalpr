import Command from "../../../shared/application/Command";

/**
 * Command class representing the intention to delete a profile in the application.
 * This command carries the necessary data for deleting a profile, such as the profile ID and user ID.
 * It extends the base Command class.
 */
export default class DeleteProfileCommand extends Command {
    /**
     * The unique identifier of the profile to be deleted.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly profileId: string;

    /**
     * Creates an instance of DeletePostCommand.
     *
     * @constructor
     * @param {string} profileId - The unique identifier of the profile to be deleted.
     */
    constructor(profileId: string) {
        super();
        this.profileId = profileId;
    }
}