import DomainEvent from "@/core/shared/domain/DomainEvent";

/**
 * Represents a domain event indicating that a post has been moderated.
 */
export class PostModeratedEvent extends DomainEvent {
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
     * @param {string} postId - The id of moderated the post.
     * @param {string} moderatedTitle - The moderated title of the post.
     * @param {string} moderatedDescription - The moderated description of the post.
     */
    constructor(postId: string, moderatedTitle: string, moderatedDescription: string) {
        super();
        this.postId = postId;
        this.moderatedTitle = moderatedTitle;
        this.moderatedDescription = moderatedDescription;
    }

    /**
     * Converts the event data to a JSON-formatted string.
     * @returns {string} - The JSON representation of the event data.
     */
    public toJson(): string {
        return JSON.stringify({
            postId: this.postId,
            moderatedTitle: this.moderatedTitle,
            moderatedDescription: this.moderatedDescription,
        });
    }
}
