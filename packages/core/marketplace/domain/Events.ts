import DomainEvent from "../../shared/domain/DomainEvent";

/**
 * Domain event representing the creation of a new post.
 * It extends the base DomainEvent class.
 */
export class PostCreatedEvent extends DomainEvent {
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
     * @type {string} - The location id of the post.
     */
    public readonly locationId: string;

    /**
     * @type {string} - The unique identifier of the user who created the post.
     */
    public readonly sellerId: string;

    /**
     * @type {string} - The category id of the post.
     */
    public readonly categoryId: string;

    /**
     * @type {string} - The URL of the photo associated with the post.
     */
    public readonly photoUrl: string;

    /**
     * @type {boolean} - Flag indicating if the post is approved.
     */

    public readonly isApproved: boolean;

    /**
     * Creates an instance of the PostCreatedEvent.
     * @param {string} id - The unique identifier of the created post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} price - The price of the post.
     * @param {string} locationId - The location id of the post.
     * @param {string} sellerId - The unique identifier of the user who created the post.
     * @param {string} categoryId - The category id of the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     * @param {string} timestamp - The timestamp of the event.
     * @param {boolean} isApproved - Flag indicating if the post is approved.
     */
    constructor(id: string, title: string, description: string, price: string, locationId: string, sellerId: string, categoryId: string, photoUrl: string, timestamp?: string, isApproved: boolean = false) {
        super(timestamp);
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.locationId = locationId;
        this.sellerId = sellerId;
        this.categoryId = categoryId;
        this.photoUrl = photoUrl;
        this.isApproved = isApproved;
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
            locationId: this.locationId,
            sellerId: this.sellerId,
            categoryId: this.categoryId,
            photoUrl: this.photoUrl,
            isApproved: this.isApproved
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
            data.locationId,
            data.sellerId,
            data.categoryId,
            data.photoUrl,
            obj.timestamp,
            data.isApproved
        );
    }
}

/**
 * Domain event representing the deletion of a post.
 * It extends the base DomainEvent class.
 */
export class PostDeletedEvent extends DomainEvent {
    /**
     * @type {string} - The unique identifier of the post to be deleted.
     */
    public readonly postId: string;

    /**
     * Creates an instance of the PostDeletedEvent.
     * @param {string} postId - The unique identifier of the post to be deleted.
     * @param {string} timestamp - The timestamp of the event.
     */
    constructor(postId: string, timestamp?: string) {
        super(timestamp);
        this.postId = postId;
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


/**
 * Represents an event indicating that a post has been marked as moderated.
 * Extends the base DomainEvent class.
 */
export class PostModeratedEvent extends DomainEvent {
    /** The unique identifier of the post. */
    public readonly postId: string;

    /** The moderated title of the post. */
    public readonly moderatedTitle: string;

    /** The moderated description of the post. */
    public readonly moderatedDescription: string;

    /** The moderated description of the post. */
    public readonly requiredModeration: boolean;

    /**
     * Creates an instance of the PostModeratedEvent.
     * @param {string} postId - The unique identifier of the post.
     * @param {string} moderatedTitle - The moderated title of the post.
     * @param {string} moderatedDescription - The moderated description of the post.
     * @param {boolean} requiredModeration - Flag indicateing if the post required moderation.
     * @param {string} timestamp - The timestamp of the event.
     */
    constructor(
        postId: string,
        moderatedTitle: string,
        moderatedDescription: string,
        requiredModeration: boolean,
        timestamp?: string
    ) {
        super(timestamp);
        this.postId = postId;
        this.moderatedTitle = moderatedTitle;
        this.moderatedDescription = moderatedDescription;
        this.requiredModeration = requiredModeration;
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({
            postId: this.postId,
            moderatedTitle: this.moderatedTitle,
            moderatedDescription: this.moderatedDescription,
            requiredModeration: this.requiredModeration,
        });
    }

    /**
     * Creates a PostModeratedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {PostModeratedEvent} - The created PostModeratedEvent instance.
     */
    public static fromJson(obj: any): PostModeratedEvent {
        return new PostModeratedEvent(
            obj.postId,
            obj.moderatedTitle,
            obj.moderatedDescription,
            obj.requiredModeration,
            obj.timestamp
        );
    }
}

export class ProfileCreatedEvent extends DomainEvent {
    /**
     * @type {string} - The unique identifier of the created post.
     */
    public readonly id: string;

    /**
     * @type {string} - The timestamp of the last update to the profile.
     */
    public readonly updated_at: string;

    /**
     * @type {string} - The username of the profile.
     */

    public readonly username: string;

    /**
     * @type {string} - Composite information about the profile, including title, photo URL, location ID, and description.
     */

    public readonly description: string;

    /**
     * @type {string} - The URL of the profile image.
     */

    public readonly profile_image_url: string;

    /**
     * @type {string} - The URL of the banner image.
     */

    public readonly banner_image_url: string;

    /**
     * @type {string} - The email address of the profile.
     */

    public readonly email: string;

    /**
     * Creates an instance of the PostCreatedEvent.
     * @param {string} id - The unique identifier of the created post.
     * @param {string} updated_at - The timestamp of the last update to the profile.
     * @param {string} username - The username of the profile.
     * @param {string} description - Composite information about the profile, including title, photo URL, location ID, and description.
     * @param {string} profile_image_url - The URL of the profile image.
     * @param {string} banner_image_url - The URL of the banner image.
     * @param {string} email - The email address of the profile.
    */
    
    constructor(id: string, updated_at: string, username: string, description: string, profile_image_url: string, banner_image_url: string, email: string, timestamp?: string) {
        super(timestamp);
        this.id = id;
        this.updated_at = updated_at;
        this.username = username;
        this.description = description;
        this.profile_image_url = profile_image_url;
        this.banner_image_url = banner_image_url;
        this.email = email;
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */
    public toJson(): string {
        return JSON.stringify({
            id: this.id,
            updated_at: this.updated_at,
            username: this.username,
            description: this.description,
            profile_image_url: this.profile_image_url,
            banner_image_url: this.banner_image_url,
            email: this.email,
        });
    }

    /**
     * Creates a ProfileCreatedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {ProfileCreatedEvent} - The created ProfileCreatedEvent instance.
     */
    public static fromJson(obj: any): ProfileCreatedEvent {
        const data = JSON.parse(obj.data);
        
        return new ProfileCreatedEvent(
            data.id,
            data.updated_at,
            data.username,
            data.description,
            data.profile_image_url,
            data.banner_image_url,
            data.email,
        );
    }
}

export class ProfileDeletedEvent extends DomainEvent {
    /**
     * @type {string} - The unique identifier of the profile to be deleted.
     */

    public readonly profileId: string;

    /**
     * Creates an instance of the ProfileDeletedEvent.
     * @param {string} profileId - The unique identifier of the profile to be deleted.
     * @param {string} timestamp - The timestamp of the event.
     */

    constructor(profileId: string, timestamp?: string) {
        super(timestamp);
        this.profileId = profileId;
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */

    public toJson(): string {
        return JSON.stringify({ id: this.profileId });
    }

    /**
     * Creates a ProfileDeletedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {ProfileDeletedEvent} - The created ProfileDeletedEvent instance.
     */

    public static fromJson(obj: any): ProfileDeletedEvent {
        return new ProfileDeletedEvent(obj.profileId, obj.timestamp);
    }

}

export class ProfileModeratedEvent extends DomainEvent {
    /** The unique identifier of the profile. */
    public readonly profileId: string;

    /** The moderated username of the profile. */
    public readonly moderatedUsername: string;

    /** The moderated description of the profile. */
    public readonly moderatedDescription: string;

    /** The moderated profile image URL. */
    public readonly moderatedProfileImageUrl: string;

    /** The moderated banner image URL. */
    public readonly moderatedBannerImageUrl: string;

    /** The moderated email of the profile. */
    public readonly moderatedEmail: string;
    
    /**
     * Creates an instance of the ProfileModeratedEvent.
     * @param {string} profileId - The unique identifier of the profile.
     * @param {string} moderatedUsername - The moderated username of the profile.
     * @param {string} moderatedDescription - The moderated description of the profile.
     * @param {string} moderatedProfileImageUrl - The moderated profile image URL.
     * @param {string} moderatedBannerImageUrl - The moderated banner image URL.
     * @param {string} moderatedEmail - The moderated email of the profile.
     * @param {string} timestamp - The timestamp of the event.
     */

    constructor(
        profileId: string,
        moderatedUsername: string,
        moderatedDescription: string,
        moderatedProfileImageUrl: string,
        moderatedBannerImageUrl: string,
        moderatedEmail: string,
        timestamp?: string
    ) {
        super(timestamp);
        this.profileId = profileId;
        this.moderatedUsername = moderatedUsername;
        this.moderatedDescription = moderatedDescription;
        this.moderatedProfileImageUrl = moderatedProfileImageUrl;
        this.moderatedBannerImageUrl = moderatedBannerImageUrl;
        this.moderatedEmail = moderatedEmail;
    }

    /**
     * Converts the event to a JSON-formatted string.
     * @returns {string} - The JSON-formatted string representing the event.
     */

    public toJson(): string {
        return JSON.stringify({
            profileId: this.profileId,
            moderatedUsername: this.moderatedUsername,
            moderatedDescription: this.moderatedDescription,
            moderatedProfileImageUrl: this.moderatedProfileImageUrl,
            moderatedBannerImageUrl: this.moderatedBannerImageUrl,
            moderatedEmail: this.moderatedEmail,
        });
    }

    /**
     * Creates a ProfileModeratedEvent instance from a JSON object.
     * @param {any} obj - The JSON object containing event data.
     * @returns {ProfileModeratedEvent} - The created ProfileModeratedEvent instance.
     */

    public static fromJson(obj: any): ProfileModeratedEvent {
        return new ProfileModeratedEvent(
            obj.profileId,
            obj.moderatedUsername,
            obj.moderatedDescription,
            obj.moderatedProfileImageUrl,
            obj.moderatedBannerImageUrl,
            obj.moderatedEmail,
            obj.timestamp
        );
    }
}