import IntegrationEvent from "@/core/shared/integration/Event";

/**
 * Represents an integration event that occurs when a new post is created.
 * Extends the base IntegrationEvent class.
 */
export class PostCreatedIntegrationEvent extends IntegrationEvent {
    /**
     * @type {string} - The unique identifier of the created post.
     */
    public readonly postId: string;

    /**
     * @type {string} - The title of the created post.
     */
    public readonly postTitle: string;

    /**
     * @type {string} - The description of the created post.
     */
    public readonly postDescription: string;

    /**
     * Creates an instance of the PostCreatedIntegrationEvent.
     * @param {string} postId - The unique identifier of the created post.
     * @param {string} postTitle - The title of the created post.
     * @param {string} postDescription - The description of the created post.
     */
    constructor(postId: string, postTitle: string, postDescription: string) {
        // Call the constructor of the base class (IntegrationEvent).
        super();

        this.postId = postId;
        this.postTitle = postTitle;
        this.postDescription = postDescription;
    }
}
