import Command from "../../../shared/application/Command";


/**
 * Defines a command for approving a post, encapsulating the ID of the post to be approved.
 * 
 * @class ApprovePostCommand
 * @typedef {ApprovePostCommand}
 * @extends {Command}
 */

export default class ApprovePostCommand extends Command {
    /**
     * Creates an instance of ApprovePostCommand, initializing it with the necessary information
     * for approving a post.
     *
     * @constructor
     * @param {string} postId The ID of the post to be approved.
     */
    constructor(
        public readonly postId: string,
    ) {
        super();
        this.postId = postId;
    }
}