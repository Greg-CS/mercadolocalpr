import * as values from "../../Values";
import * as events from "../../Events";

import ModerationAPI from "../../ModerationAPI";
import DomainEvent from "../../../../shared/domain/DomainEvent";
import { AggregateRoot } from "../../../../shared/domain/Entity";

/**
 * Represents the state of a Profile aggregate within the domain, encapsulating all properties and state transitions through domain events.
 */

class ProfileState {
    /**
     * Indicates whether the profile has been deleted.
     *
     * @public
     * @type {boolean}
     */
    public isDeleted: boolean;

    /**
     * Indicates whether the profile has undergone moderation.
     *
     * @public
     * @type {boolean}
     */
    public isModerated: boolean;

    /**
     * Initializes a new instance of the ProfileState class with optional initial property values.
     * 
     * @param {values.ProfileId} id - The unique identifier of the profile.
     * @param {values.updated_at} updated_at - The timestamp of the last update to the profile.
     * @param {values.username} username - The username of the profile.
     * @param {values.description} description - Composite information about the profile, including title, photo URL, location ID, and description.
     * @param {values.profile_image_url} profile_image_url - The URL of the profile image.
     * @param {values.banner_image_url} banner_image_url - The URL of the banner image.
     * @param {values.email} email - The email address of the profile.
    */

    public constructor(
        public id?: values.ProfileId,
        public updated_at?: values.updated_at,
        public username?: values.username,
        public description?: values.description,
        public profile_image_url?: values.profile_image_url,
        public banner_image_url?: values.banner_image_url,
        public email?: values.email,
    ) {
        this.isDeleted = false;
        this.isModerated = false;
    }

    /**
     * Applies a given domain event to mutate the state of the Post accordingly.
     * 
     * @param {DomainEvent} event - The domain event to be applied.
     */
    public apply(event: DomainEvent) {
    if (event instanceof events.PostCreatedEvent) 
        this.applyProfileCreatedEvent(event);
    else if (event instanceof events.ProfileDeletedEvent)
        this.applyProfileDeletedEvent(event);
    else if (event instanceof events.ProfileModeratedEvent)
        this.applyProfileModeratedEvent(event);
    else
        throw new Error(`Unhandled event '${event.constructor.name}'`);
    }

    /**
     * Updates the state based on the ProfileCreatedEvent, initializing it with event data.
     * 
     * @param {events.ProfileCreatedEvent} event - The ProfileCreatedEvent to be applied.
    */
    private applyProfileCreatedEvent(event: events.ProfileCreatedEvent) {
        this.id = event.id;
        this.updated_at = event.updated_at;
        this.username = event.username;
        this.description = event.description;
        this.profile_image_url = event.profile_image_url;
        this.banner_image_url = event.banner_image_url;
        this.email = event.email;
    }

    /**
     * Marks the post as deleted in response to a ProfileDeletedEvent.
     * 
     * @param {events.ProfileDeletedEvent} event - The ProfileDeletedEvent to be applied.
     */
    private applyProfileDeletedEvent(event: events.ProfileDeletedEvent): void {
        this.isDeleted = true;
    }

    /** 
     * Retrieves the username of the profile.
     * 
     * @public
     * @returns {values.username} - The username of the profile.
     */
    public getUsername(): values.username | undefined{
        return this.username;
    }

    /**
     * Retrieves the description of the profile.
     * 
     * @public
     * @returns {values.description} - The description of the profile.
     */
    public getDescription(): values.description | undefined {
        return this.description;
    }
}

/**
 * The Profile aggregate root, encapsulating the state and behavior of a Profile entity within the domain.
 */

export default class Profile extends AggregateRoot {
    /** 
     * The encapsulated state of the Post.
     * 
     * @private
     * @type {ProfileState}
    */
    private state: ProfileState;

    /**
     * Initializes a new instance of the Post aggregate, optionally applying an array of domain events.
     * 
     * @param {DomainEvent[]} events - An optional array of domain events to apply to the state.
     */

    public constructor(events?: DomainEvent[]) {
        super();
        this.state = new ProfileState();
        if (events) {
            for (const event of events) {
                this.state.apply(event);
            }
        }
    }

    /**
     * Retrieves the unique identifier of the profile.
     * 
     * @public
     * @returns {values.ProfileId} - The unique identifier of the profile.
     */

    public getId(): values.ProfileId | undefined {
        return this.state.id;
    }

    /**
     * Indicates whether the profile has been deleted.
     * 
     * @returns {boolean} - True if the profile has been deleted; otherwise, false.
     */

    public isDeleted(): boolean {
        return this.state.isDeleted;
    }

    /**
     * Retrieves the username of the profile.
     * 
     * @public
     * @returns {values.username} - The username of the profile.
     */

    public getUsername(): values.username | undefined {
        return this.state.getUsername();
    }

    /**
     * Applies a domain event to the Profile, updating its state accordingly.
     * 
     * @param {DomainEvent} event - The domain event to be applied.
     */

    protected apply(event: DomainEvent): void {
        this.state.apply(event);
    }

    /**
     * Factory method to create a new Profile instance.
     * 
     * @param {values.ProfileId} id - The unique identifier of the profile.
     * @param {values.updated_at} updated_at - The timestamp of the last update to the profile.
     * @param {values.username} username - The username of the profile.
     * @param {values.description} description - Composite information about the profile, including title, photo URL, location ID, and description.
     * @param {values.profile_image_url} profile_image_url - The URL of the profile image.
     * @param {values.banner_image_url} banner_image_url - The URL of the banner image.
     * @param {values.email} email - The email address of the profile.
     * @returns {Profile} - The newly created Profile instance.
     */

    public static create(id: string, updated_at: string, username: string, description: string, profile_image_url: string, banner_image_url: string, email: string): Profile {
        let profile = new Profile();
        
        let event = new events.ProfileCreatedEvent(
            id,
            updated_at,
            username,
            description,
            profile_image_url,
            banner_image_url,
            email
        );

        profile.apply(event);

        return profile;
    }

    /**
     * Marks the profile as deleted in response to a ProfileDeletedEvent.
     * 
     * @param {values.ProfileId} profileId - The ProfileDeletedEvent to be applied.
     */

    public delete(profileId: values.ProfileId): void {
        if (profileId && !this.isDeleted) {
            this.addEvent(new events.ProfileDeletedEvent(profileId.id));
        }
    }

    /**
     * Marks the profile as moderated in response to a ProfileModeratedEvent.
     * 
     * @param {events.ProfileModeratedEvent} event - The ProfileModeratedEvent to be applied.
     */

    public moderate(moderationApi: ModerationAPI): void {
        const currentDescription = this.state.getDescription();
        const moderatedDescription = moderationApi.moderate(currentDescription);

        if (requiredModeration) {
            this.addEvent(new events.ProfileModeratedEvent(
                this.state.id, 
                moderatedDescription
            ));
        }
    }
}
