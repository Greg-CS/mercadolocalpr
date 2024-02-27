import MarketPlaceService from "../marketplace/integration/MarketPlaceService";
import DomainEvent from "../shared/domain/DomainEvent";
import Module from "../shared/module";
import ModeratePostCommand from "./application/ModeratePost/ModeratePostCommand";
import ModeratePostHandler from "./application/ModeratePost/ModeratePostHandler";
import NotifyModerationCompletionHanlder from "./application/ModeratePost/NotifyModerationCompletionHandler";
import { PostModeratedEvent } from "./domain/Events";
import ModeratedPostStore from "./domain/Models/ModeratedPostStore";
import ModerationAPI from "./domain/ModerationAPI";

/**
 * ModerationModule represents a module responsible for handling post moderation within the application.
 * It extends the base Module class to leverage its functionality.
 */
export default class ModerationModule extends Module {
    /**
     * The moderation API instance used for handling post moderation.
     * @type {ModerationAPI}
     * @readonly
     */
    private readonly moderationApi: ModerationAPI;

    /**
     * The service for interacting with the marketplace.
     * @type {MarketPlaceService}
     * @readonly
     */
    private readonly marketplaceService: MarketPlaceService;

    /**
     * The store for managing moderated post read models.
     * @type {ModeratedPostStore}
     * @readonly
     */
    private readonly postStore: ModeratedPostStore;
    
    /**
     * Creates an instance of the ModerationModule.
     * @param {ModerationAPI} moderationApi - The moderation API for handling post moderation.
     * @param {MarketPlaceService} marketplaceService - The service for interacting with the marketplace.
     * @param {ModeratedPostStore} postStore - The store for managing moderated post read models.
     */
    constructor(
        moderationApi: ModerationAPI, 
        marketplaceService: MarketPlaceService,
        postStore: ModeratedPostStore,
    ) {
        // Call the constructor of the base class (Module).
        super();

        this.postStore = postStore;
        this.moderationApi = moderationApi;
        this.marketplaceService = marketplaceService;

        // Commands
        this.registerCommand(
            ModeratePostCommand.name, 
            new ModeratePostHandler(moderationApi, postStore)
        );
        
        // Events
        this.registerEvent(
            PostModeratedEvent.name, 
            new NotifyModerationCompletionHanlder(marketplaceService)
        );
    }

    /**
     * Retrieves new events that need to be processed.
     * @returns {DomainEvent[]} - The array of new domain events.
     */
    protected getNewEvents(): DomainEvent[] {
        return this.postStore.getNewEvents();
    }
}
