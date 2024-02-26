import DomainEvent from "@/core/shared/domain/DomainEvent";

/**
 * Domain event representing the creation of a new post.
 * It extends the base DomainEvent class.
 */
export class PostCreatedEvent extends DomainEvent {
    public readonly id: string;
    public readonly title: string;
    public readonly description: string;
    public readonly price: string;
    public readonly location: string;
    public readonly userId: string;
    public readonly category: string;
    public readonly photoUrl: string;

    /**
     * Creates an instance of the PostCreatedEvent.
     * @param {string} id - The unique identifier of the created post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} price - The price of the post.
     * @param {string} location - The location of the post.
     * @param {string} userId - The unique identifier of the user who created the post.
     * @param {string} category - The category of the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     * @param {string} timestamp - The timestamp of the event.
     */
    constructor(id: string, title: string, description: string, price: string, location: string, userId: string, category: string, photoUrl: string, timestamp?: string) {
        super(timestamp);
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.userId = userId;
        this.category = category;
        this.photoUrl = photoUrl;
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({
            id: this.id,
            title: this.title,
            description: this.description,
            price: this.price,
            location: this.location,
            userId: this.userId,
            category: this.category,
            photoUrl: this.photoUrl,
        });
    }

    /**
     * Creates a PostCreatedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {PostCreatedEvent} - The created PostCreatedEvent instance.
     */
    public static fromJson(obj: any): PostCreatedEvent {
        const data = JSON.parse(obj.data);
        
        return new PostCreatedEvent(
            data.id,
            data.title,
            data.description,
            data.price,
            data.location,
            data.userId,
            data.category,
            data.photoUrl,
            obj.timestamp,
        );
    }
}

/**
 * Domain event representing the deletion of a post.
 * It extends the base DomainEvent class.
 */
export class PostDeletedEvent extends DomainEvent {
    /**
     * Creates an instance of the PostDeletedEvent.
     * @param {string} postId - The unique identifier of the post to be deleted.
     * @param {string} timestamp - The timestamp of the event.
     */
    constructor(public readonly postId: string, timestamp?: string) {
        super(timestamp);
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({ postId: this.postId });
    }

    /**
     * Creates a PostDeletedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {PostDeletedEvent} - The created PostDeletedEvent instance.
     */
    public static fromJson(obj: any): PostDeletedEvent {
        return new PostDeletedEvent(obj.postId, obj.timestamp);
    }
}
