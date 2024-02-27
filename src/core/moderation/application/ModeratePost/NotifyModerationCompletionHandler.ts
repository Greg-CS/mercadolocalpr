import DomainEventHandler from "@/core/shared/application/DomainEventHandler";
import { PostModeratedEvent } from "../../domain/Events";
import MarketPlaceService from "@/core/marketplace/integration/MarketPlaceService";
import { PostModeratedIntegrationEvent } from "../../integration/Events";

/**
 * Handler for notifying the completion of post moderation.
 * Extends the base DomainEventHandler class.
 */
export default class NotifyModerationCompletionHanlder extends DomainEventHandler {
    /**
     * The MarketplaceService responsible for communication with the marketplace.
     * @type {MarketPlaceService}
     * @private
     */
    private marketplaceService: MarketPlaceService;

    /**
     * Creates an instance of the NotifyModerationCompletionHanlder.
     * @param {MarketPlaceService} marketplaceService - The MarketplaceService for communication with the marketplace.
     */
    constructor(marketplaceService: MarketPlaceService) {
        super();
        this.marketplaceService = marketplaceService;
    }

    /**
     * Handles the PostModeratedEvent by notifying the completion of post moderation to the marketplace.
     * @param {PostModeratedEvent} evt - The event indicating the completion of post moderation.
     * @returns {void}
     */
    public handle(evt: PostModeratedEvent): void {
        // Notify the completion of post moderation to the marketplace
        this.marketplaceService.postModerated(
            new PostModeratedIntegrationEvent(
                evt.postId,
                evt.moderatedTitle,
                evt.moderatedDescription,
            )
        );
    }
}
