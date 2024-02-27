import IntegrationEvent from "@/core/shared/integration/Event";

/**
 * Integration event representing the moderation of a post.
 * Extends the base IntegrationEvent class.
 */
export class PostModeratedIntegrationEvent extends IntegrationEvent {
    /**
     * The id of the moderated post.
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
     * Creates an instance of the PostModeratedIntegrationEvent.
     * @param {string} postId - The id of the moderated post.
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
