import Command from "@/core/shared/application/Command";

/**
 * Represents a command to mark a post as moderated.
 * Extends the base Command class.
 */
export default class MarkPostModeratedCommand extends Command {
    /**
     * The unique identifier of the post.
     * @type {string}
     * @readonly
     */
    public readonly postId: string;

    /**
     * The moderated title of the post.
     * @type {string}
     * @readonly
     */
    public readonly moderatedTitle: string;

    /**
     * The moderated description of the post.
     * @type {string}
     * @readonly
     */
    public readonly moderatedDescription: string;

    /**
     * Creates an instance of the MarkPostModeratedCommand.
     * @param {string} postId - The unique identifier of the post.
     * @param {string} moderatedTitle - The moderated title of the post.
     * @param {string} moderatedDescription - The moderated description of the post.
     */
    constructor(postId: string, moderatedTitle: string, moderatedDescription: string) {
        super();
        this.postId = postId;
        this.moderatedTitle = moderatedTitle;
        this.moderatedDescription = moderatedDescription;
    }
}
