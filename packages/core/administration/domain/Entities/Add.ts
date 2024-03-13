import * as values from "../Values";
import * as events from "../Events";

import { AggregateRoot } from "../../../shared/domain/Entity";
import DomainEvent from "../../../shared/domain/DomainEvent";
import ModerationAPI from "../ModerationAPI";

/**
 * State class representing the current state of a Add aggregate.
 * It contains properties related to the Add entity and methods to apply domain events.
 */
class AddState {
    /**
     * [placeholder]
     *
     * @public
     * @type {boolean}
     */
    public isDeleted: boolean;
    /**
     * [placeholder]
     *
     * @public
     * @type {boolean}
     */
    public isModerated: boolean;

    /**
     * Creates an instance of the AddState class.
     * @param {values.AddId} id - The unique identifier of the Add.
     * @param {values.AddInfo} addInfo - Information about the Add (id, title, photoUrl, description).
     * @param {values.AddPrice} price - The price of the Add.
     * @param {values.SellerId} sellerId - The unique identifier of the user who created the Add.
     * @param {values.AddCategoryId} category - The category of the Add.
     */
    public constructor(
        public id?: values.AddId,
        public addInfo?: values.AddInfo,
        public price?: values.AddPrice,
        public sellerId?: values.SellerId,
        public category?: values.AddCategoryId,
    ) {
        this.isDeleted = false;
        this.isModerated = false;
    }

    /**
     * Applies a domain event to update the state of the Add.
     * @param {DomainEvent} event - The domain event to be applied.
     */
    public apply(event: DomainEvent) {
        if (event instanceof events.AddCreatedEvent) 
            this.applyAddCreatedEvent(event);
        else if (event instanceof events.AddDeletedEvent)
            this.applyAddDeletedEvent(event);
        else if (event instanceof events.AddModeratedEvent)
            this.applyAddModeratedEvent(event);
        else
            throw new Error(`Unhandled event '${event.constructor.name}'`)
    }

    /**
     * Applies the AddCreatedEvent to update the state with the event data.
     * @param {events.AddCreatedEvent} event - The AddCreatedEvent to be applied.
     */
    private applyAddCreatedEvent(event: events.AddCreatedEvent) {
        this.id = new values.AddId(event.id);
        this.addInfo = new values.AddInfo(event.title, event.photoUrl, event.location, event.description);
        this.price = new values.AddPrice(event.price);
        this.sellerId = new values.SellerId(event.sellerId);
        this.isModerated = false;
        this.isDeleted = false;
    }

    /**
     * Applies the AddDeletedEvent to mark the Add as deleted.
     * @param {events.AddDeletedEvent} event - The AddDeletedEvent to be applied.
     */
    private applyAddDeletedEvent(event: events.AddDeletedEvent): void {
        this.isDeleted = true;
    }

    /**
     * [placeholder]
     *
     * @private
     * @param {events.AddModeratedEvent} event
     */
    private applyAddModeratedEvent(event: events.AddModeratedEvent): void {
        this.addInfo = new values.AddInfo(
            event.moderatedTitle,
            this.addInfo!.photoUrl,
            this.addInfo!.location,
            event.moderatedDescription
        );
    }

    /**
     * [placeholder]
     *
     * @public
     * @returns {string}
     */
    public getAddTitle(): string {
        return this.addInfo!.title;
    }

    /**
     * [placeholder]
     *
     * @public
     * @returns {string}
     */
    public getAddDescription(): string {
        return this.addInfo!.description;
    }
}

/**
 * Aggregate root representing a Add entity.
 * It extends the base AggregateRoot class and manages the state of the Add.
 */
export default class Add extends AggregateRoot {
    /**
     * The current state of the Add.
     *
     * @private
     * @type {AddState}
     */
    private state: AddState;

    /**
     * Creates an instance of the Add aggregate.
     * @param {DomainEvent[]} events - Array of domain events to apply during construction.
     */
    public constructor(events?: DomainEvent[]) {
        super();
        this.state = new AddState();

        if (events) events.forEach(e => this.apply(e));
    }

    /**
     * Gets the unique identifier of the add.
     * @returns {string | undefined} - The ID of the add.
     */
    public getId(): string | undefined {
        return this.state.id?.id;
    }

    /**
     * Gets a value indicating whether the add is deleted.
     * @returns {boolean} - True if the add is deleted, otherwise false.
     */
    public get isDeleted(): boolean {
        return this.state.isDeleted;
    }

    /**
     * Checks if the add is owned by the specified user.
     * @param {values.SellerId} sellerId - The ID of the user to check against.
     * @returns {boolean} - True if the add is owned by the specified user, otherwise false.
     */
    public isOwnedBy(sellerId: values.SellerId): boolean {
        if(this.state.sellerId) {
            return this.state.sellerId?.equals(sellerId);
        }

        return false;
    }

    /**
     * Applies a domain event to update the state of the add.
     * @param {DomainEvent} event - The domain event to be applied.
     */
    protected apply(event: DomainEvent): void {
        this.state.apply(event);
    }

    /**
     * Creates a new Add instance using the provided data and emits a AddCreatedEvent.
     * @param {string} id - The unique identifier for the Add.
     * @param {string} title - The title of the Add.
     * @param {string} description - The description of the Add.
     * @param {string} price - The price of the Add.
     * @param {string} location - The location of the Add.
     * @param {string} sellerId - The unique identifier of the user creating the Add.
     * @param {string} photoUrl - The URL of the photo associated with the Add.
     * @returns {Add} - The newly created Add instance.
     */
    public static create(id: string, title: string, description: string, price: string, location: string, sellerId: string, category: string, photoUrl: string): Add {
        let add = new Add();
        
        let event = new events.AddCreatedEvent(
            id,
            title,
            description,
            price,
            location,
            sellerId,
            photoUrl
        );

        add.addEvent(event);

        return add;
    }

    /**
     * Marks the add as deleted if the provided user ID matches the owner's ID.
     * @param {values.SellerId} sellerId - The ID of the user initiating the deletion.
     */
    public delete(sellerId: values.SellerId): void {
        let addId = this.state.id;

        if (addId && !this.isDeleted && this.isOwnedBy(sellerId)) {
            this.addEvent(new events.AddDeletedEvent(addId.id));
        }
    }

    /**
     * Moderate the contents of a add.
     *
     * @public
     * @param {ModerationAPI} moderationApi
     */
    public moderate(moderationApi: ModerationAPI): void {
        const currentTitle = this.state.getAddTitle();
        const currentDescription = this.state.getAddDescription();

        const moderatedTitle = moderationApi.clean(currentTitle);
        const moderatedDescription = moderationApi.clean(currentDescription);

        const requiredModeration = (moderatedTitle != currentTitle) || (moderatedDescription != currentDescription);

        this.addEvent(new events.PostModeratedEvent(
            this.state.id!.id,
            moderatedTitle,
            moderatedDescription,
            requiredModeration
        ))
    }
}
