import DomainEvent from "../../shared/domain/DomainEvent";

/**
 * Domain event representing the creation of a new post.
 * It extends the base DomainEvent class.
 */
export class AddCreatedEvent extends DomainEvent {
    /**
     * @type {string} - The unique identifier of the created post.
     */
    public readonly id: string;

    /**
     * @type {string} - The title of the post.
     */
    public readonly title: string;

    /**
     * @type {string} - The description of the post.
     */
    public readonly description: string;

    /**
     * @type {string} - The price of the post.
     */
    public readonly price: string;

    /**
     * @type {string} - The unique identifier of the user who created the post.
     */
    public readonly sellerId: string;

    /**
     * @type {string} - The URL of the photo associated with the post.
     */
    public readonly photoUrl: string;

    // /**
    //  * @type {string} - The timestamp of the event.
    //  */
    // public readonly timestamp: string;

    /**
     * Creates an instance of the PostCreatedEvent.
     * @param {string} id - The unique identifier of the created post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} price - The price of the post.
     * @param {string} sellerId - The unique identifier of the user who created the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     * @param {string} timestamp - The timestamp of the event.
     */
    constructor(id: string, title: string, description: string, price: string, sellerId: string, photoUrl: string, timestamp?: string) {
        super(timestamp);
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.sellerId = sellerId;
        this.photoUrl = photoUrl;
        // this.timestamp = timestamp;
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
            sellerId: this.sellerId,
            photoUrl: this.photoUrl,
            // timestamp: this.timestamp,
        });
    }

    /**
     * Creates a AddCreatedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {AddCreatedEvent} - The created AddCreatedEvent instance.
     */
    public static fromJson(obj: any): AddCreatedEvent {
        const data = JSON.parse(obj.data);
        
        return new AddCreatedEvent(
            data.id,
            data.title,
            data.description,
            data.price,
            data.sellerId,
            data.photoUrl,
            obj.timestamp,
        );
    }
}

/**
 * Domain event representing the deletion of a add.
 * It extends the base DomainEvent class.
 */
export class AddDeletedEvent extends DomainEvent {
    /**
     * @param {string} - The unique identifier of the add to be deleted.
     * @param {string} - The timestamp of the event.
     */
    public readonly addId: string;

    /**
     * Creates an instance of the AddDeletedEvent.
     * @param {string} addId - the unique identifier of the created add. 
     * @param {string} timestamp - The timestamp of the event. 
     */

    constructor(addId: string, timestamp?: string) {
        super(timestamp);
        this.addId = addId;
    }

    public toJson(): string {
        return JSON.stringify({ id: this.addId });
    }

    public static fromJson(obj: any): AddDeletedEvent {
        return new AddDeletedEvent(obj.id, obj.timestamp);
    }
}

/**
 * Represents an event indicating that a post has been marked as moderated.
 * Extends the base DomainEvent class.
 */
export class AddModeratedEvent extends DomainEvent {
    /** The unique identifier of the post. */
    public readonly addId: string;

    /** The moderated title of the post. */
    public readonly moderatedTitle: string;

    /** The moderated description of the post. */
    public readonly moderatedDescription: string;

    /** The moderated description of the post. */
    public readonly requiredModeration: boolean;

    /**
     * Creates an instance of the PostModeratedEvent.
     * @param {string} addId - The unique identifier of the post.
     * @param {string} moderatedTitle - The moderated title of the post.
     * @param {string} moderatedDescription - The moderated description of the post.
     * @param {boolean} requiredModeration - Flag indicateing if the post required moderation.
     * @param {string} timestamp - The timestamp of the event.
     */

    constructor(
        addId: string,
        moderatedTitle: string,
        moderatedDescription: string,
        requiredModeration: boolean,
        timestamp?: string
    ) {
        super(timestamp);
        this.addId = addId;
        this.moderatedTitle = moderatedTitle;
        this.moderatedDescription = moderatedDescription;
        this.requiredModeration = requiredModeration;
    }

    /**
     *  converts the event to a JSON-formatted string.
     *  @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({
            addId: this.addId,
            moderatedTitle: this.moderatedTitle,
            moderatedDescription: this.moderatedDescription,
            requiredModeration: this.requiredModeration,
        });
    }

    /**
     * Creates a AddModeratedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {AddModeratedEvent} - The created AddModeratedEvent instance.
     */
    public static fromJson(obj: any): AddModeratedEvent {
        return new AddModeratedEvent(
            obj.addId,
            obj.moderatedTitle,
            obj.moderatedDescription,
            obj.requiredModeration,
            obj.timestamp
        );
    }
}

export class ApprovePostEvent extends DomainEvent {
        /** The unique identifier of the post. */
    public readonly postId: string;

    /** The moderated description of the post. */
    public readonly isApproved: boolean;

    /**
     * Creates an instance of the PostModeratedEvent.
     * @param {string} postId - The unique identifier of the post.
     * @param {string} isApproved - The moderated title of the post.
     * @param {string} timestamp - The timestamp of the event.
     */

    constructor(
        postId: string,
        isApproved: boolean,
        timestamp?: string
    ) {
        super(timestamp);
        this.postId = postId;
        this.isApproved = isApproved;
    }

    /**
     *  converts the event to a JSON-formatted string.
     *  @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({
            addId: this.postId,
            isApprovedf: this.isApproved,
        });
    }

    /**
     * Creates a AddModeratedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {AddModeratedEvent} - The created AddModeratedEvent instance.
     */
    public static fromJson(obj: any): ApprovePostEvent {
        return new ApprovePostEvent(
            obj.postId,
            obj.isApproved,
            obj.timestamp
        );
    }
}