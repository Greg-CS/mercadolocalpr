import * as values from "../Values";
import * as events from "../Events";

import { AggregateRoot } from "@/core/shared/domain/Entity";
import DomainEvent from "@/core/shared/domain/DomainEvent";

/**
 * State class representing the current state of a Post aggregate.
 * It contains properties related to the Post entity and methods to apply domain events.
 */
class PostState {
    public isDeleted: boolean;
    public isModerated: boolean;

    /**
     * Creates an instance of the PostState class.
     * @param {values.PostId} id - The unique identifier of the post.
     * @param {values.PostInfo} postInfo - Information about the post (title, photoUrl, location, description).
     * @param {values.PostPrice} price - The price of the post.
     * @param {values.UserId} userId - The unique identifier of the user who created the post.
     * @param {values.PostCategoryId} category - The category of the post.
     */
    public constructor(
        public id?: values.PostId,
        public postInfo?: values.PostInfo,
        public price?: values.PostPrice,
        public userId?: values.UserId,
        public category?: values.PostCategoryId,
    ) {
        this.isDeleted = false;
        this.isModerated = false;
    }

    /**
     * Applies a domain event to update the state of the Post.
     * @param {DomainEvent} event - The domain event to be applied.
     */
    public apply(event: DomainEvent) {
        if (event instanceof events.PostCreatedEvent) 
            this.applyPostCreatedEvent(event);
        else if (event instanceof events.PostDeletedEvent)
            this.applyPostDeletedEvent(event);
    }

    /**
     * Applies the PostCreatedEvent to update the state with the event data.
     * @param {events.PostCreatedEvent} event - The PostCreatedEvent to be applied.
     */
    protected applyPostCreatedEvent(event: events.PostCreatedEvent) {
        this.id = new values.PostId(event.id);
        this.postInfo = new values.PostInfo(event.title, event.photoUrl, event.location, event.description);
        this.price = new values.PostPrice(event.price);
        this.userId = new values.UserId(event.userId);
        this.category = new values.PostCategoryId(event.category);
        this.isModerated = false;
        this.isDeleted = false;
    }

    /**
     * Applies the PostDeletedEvent to mark the post as deleted.
     * @param {events.PostDeletedEvent} event - The PostDeletedEvent to be applied.
     */
    public applyPostDeletedEvent(event: events.PostDeletedEvent): void {
        this.isDeleted = true;
    }
}

/**
 * Aggregate root representing a Post entity.
 * It extends the base AggregateRoot class and manages the state of the Post.
 */
export default class Post extends AggregateRoot {
    private state: PostState;

    /**
     * Creates an instance of the Post aggregate.
     * @param {DomainEvent[]} events - Array of domain events to apply during construction.
     */
    public constructor(events?: DomainEvent[]) {
        super();
        this.state = new PostState();

        if (events) events.forEach(e => this.apply(e));
    }

    /**
     * Gets the unique identifier of the post.
     * @returns {string | undefined} - The ID of the post.
     */
    public getId(): string | undefined {
        return this.state.id?.id;
    }

    /**
     * Gets a value indicating whether the post is deleted.
     * @returns {boolean} - True if the post is deleted, otherwise false.
     */
    public get isDeleted(): boolean {
        return this.state.isDeleted;
    }

    /**
     * Checks if the post is owned by the specified user.
     * @param {values.UserId} userId - The ID of the user to check against.
     * @returns {boolean} - True if the post is owned by the specified user, otherwise false.
     */
    public isOwnedBy(userId: values.UserId): boolean {
        if(this.state.userId) {
            return this.state.userId?.equals(userId);
        }

        return false;
    }

    /**
     * Applies a domain event to update the state of the Post.
     * @param {DomainEvent} event - The domain event to be applied.
     */
    protected apply(event: DomainEvent): void {
        this.state.apply(event);
    }

    /**
     * Creates a new Post instance using the provided data and emits a PostCreatedEvent.
     * @param {string} id - The unique identifier for the post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} price - The price of the post.
     * @param {string} location - The location of the post.
     * @param {string} userId - The unique identifier of the user creating the post.
     * @param {string} category - The category of the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     * @returns {Post} - The newly created Post instance.
     */
    public static create(id: string, title: string, description: string, price: string, location: string, userId: string, category: string, photoUrl: string): Post {
        let post = new Post();
        
        let event = new events.PostCreatedEvent(
            id,
            title,
            description,
            price,
            location,
            userId,
            category,
            photoUrl
        );

        post.addEvent(event);

        return post;
    }

    /**
     * Marks the post as deleted if the provided user ID matches the owner's ID.
     * @param {values.UserId} userId - The ID of the user initiating the deletion.
     */
    public delete(userId: values.UserId): void {
        let postId = this.state.id;

        if (postId && !this.isDeleted && this.isOwnedBy(userId)) {
            this.addEvent(new events.PostDeletedEvent(postId.id));
        }
    }

    public markModerated(moderatedTitle: string, moderatedDescription: string): void {
        this.addEvent(new events.PostMarkedModeratedEvent(
            this.state.id!.id,
            moderatedTitle,
            moderatedDescription
        ))
    }
}
