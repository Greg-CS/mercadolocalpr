import CommandHandler from "@/core/shared/application/CommandHandler";
import ModeratePostCommand from "./ModeratePostCommand";
import ModerationAPI from "../../domain/ModerationAPI";
import AbstractMessageBus from "@/core/shared/application/AbstractMessageBus";
import { PostModeratedEvent } from "../../domain/Events";
import Post from "../../domain/Entities/Post";
import ModeratedPostStore from "../../domain/Models/ModeratedPostStore";

/**
 * Handler for moderating a post.
 * Extends the base CommandHandler class.
 */
export default class ModeratePostHandler extends CommandHandler {
    /**
     * The ModerationAPI responsible for cleaning and moderating text.
     * @type {ModerationAPI}
     * @private
     */
    private moderationAPI: ModerationAPI;

    /**
     * The AbstractMessageBus responsible for cleaning and moderating text.
     * @type {ModeratedPostStore}
     * @private
     */
    private postStore: ModeratedPostStore;

    /**
     * Creates an instance of the ModeratePostHandler.
     * @param {ModerationAPI} moderationAPI - The ModerationAPI for cleaning and moderating text.
     */
    constructor(moderationAPI: ModerationAPI, postStore: ModeratedPostStore) {
        super();
        this.moderationAPI = moderationAPI;
        this.postStore = postStore;
    }

    /**
     * Handles the ModeratePostCommand by initiating the moderation process.
     * @param {ModeratePostCommand} cmd - The command to moderate a post.
     * @returns {Promise<void>} - A promise indicating the completion of the moderation process.
     */
    public async handle(cmd: ModeratePostCommand): Promise<void> {
        const cleanPostTitle = this.moderationAPI.clean(cmd.postTitle);
        const cleanPostDescription = this.moderationAPI.clean(cmd.postDescription);

        const post = new Post(cmd.postId);

        post.moderate(cleanPostTitle, cleanPostDescription);

        this.postStore.add(post);
    }
}
