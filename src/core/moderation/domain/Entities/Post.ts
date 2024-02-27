import DomainEvent from "@/core/shared/domain/DomainEvent";
import { AggregateRoot } from "@/core/shared/domain/Entity";
import { PostModeratedEvent } from "../Events";

/**
 * Post represents an aggregate root for handling post-related domain logic.
 * It extends the base AggregateRoot class.
 */
export default class Post extends AggregateRoot {
    /**
     * The unique identifier of the post.
     * @type {string}
     * @private
     */
    private id: string;

    /**
     * The title of the post.
     * @type {string | undefined}
     * @private
     */
    private title?: string;

    /**
     * The description of the post.
     * @type {string | undefined}
     * @private
     */
    private description?: string;

    /**
     * Creates an instance of the Post aggregate root.
     * @param {string} id - The unique identifier of the post.
     */
    constructor(id: string) {
        super();
        this.id = id;
    }

    /**
     * Moderates the post by adding a PostModeratedEvent to the list of domain events.
     * @param {string} title - The moderated title for the post.
     * @param {string} description - The moderated description for the post.
     */
    public moderate(title: string, description: string): void {
        this.addEvent(new PostModeratedEvent(
            this.id,
            title,
            description
        ));
    }

    /**
     * Applies the domain event to the aggregate root, updating its state.
     * @param {DomainEvent} event - The domain event to be applied.
     * @protected
     */
    protected apply(event: DomainEvent): void {
        if (event instanceof PostModeratedEvent) {
            this.applyPostModeratedEvent(event);
        }
    }

    /**
     * Applies the PostModeratedEvent to update the title and description of the post.
     * @param {PostModeratedEvent} event - The PostModeratedEvent to be applied.
     * @private
     */
    private applyPostModeratedEvent(event: PostModeratedEvent): void {
        this.title = event.moderatedTitle;
        this.description = event.moderatedDescription;
    }
}
