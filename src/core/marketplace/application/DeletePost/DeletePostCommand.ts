import Command from "@/core/shared/application/Command";

/**
 * Command class representing the intention to delete a post in the application.
 * This command carries the necessary data for deleting a post, such as the post ID and user ID.
 * It extends the base Command class.
 */
export default class DeletePostCommand extends Command {
    /**
     * Creates an instance of the DeletePostCommand class.
     * @param {string} postId - The unique identifier for the post to be deleted.
     * @param {string} sellerId - The unique identifier of the user initiating the deletion.
     */
    constructor(public readonly postId: string, public sellerId: string) {
        super();
    }
}
