import Command from "@/core/shared/application/Command";

/**
 * Command representing the moderation of a post.
 * Extends the base Command class.
 */
export default class ModeratePostCommand extends Command {
    /**
     * The unique identifier of the post to be moderated.
     * @type {string}
     * @readonly
     */
    public readonly postId: string;

    /**
     * The title of the post to be moderated.
     * @type {string}
     * @readonly
     */
    public readonly postTitle: string;

    /**
     * The description of the post to be moderated.
     * @type {string}
     * @readonly
     */
    public readonly postDescription: string;

    /**
     * Creates an instance of the ModeratePostCommand.
     * @param {string} postId - The unique identifier of the post to be moderated.
     * @param {string} postTitle - The title of the post to be moderated.
     * @param {string} postDescription - The description of the post to be moderated.
     */
    constructor(postId: string, postTitle: string, postDescription: string) {
        super();
        this.postId = postId;
        this.postTitle = postTitle;
        this.postDescription = postDescription;
    }
}
