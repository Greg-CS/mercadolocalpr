import { PostCreatedIntegrationEvent } from "@/core/marketplace/integration/Event";


/**
 * Interface representing the ModerationService.
 * It defines methods related to post moderation.
 */
export default interface ModerationService {
    /**
     * Moderates a newly created post.
     * @param {PostCreatedIntegrationEvent} event - The event indicating the creation of a new post.
     * @returns {void}
     */
    moderatePost(event: PostCreatedIntegrationEvent): void;
}
