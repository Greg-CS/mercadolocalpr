import { PostModeratedIntegrationEvent } from "@/core/moderation/integration/Events";

/**
 * Interface representing the MarketPlaceService.
 * It defines methods related to marketplace functionality.
 */
export default interface MarketPlaceService {
    /**
     * Handles the event when a post is moderated.
     * @param {PostModeratedIntegrationEvent} event - The event indicating that a post has been moderated.
     * @returns {void}
     */
    postModerated(event: PostModeratedIntegrationEvent): void;
}
