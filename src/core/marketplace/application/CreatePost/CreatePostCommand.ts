import Command from "@/core/shared/application/Command";

/**
 * Command class representing the intention to create a new post in the application.
 * This command carries the necessary data for creating a post, such as title, description, etc.
 * It extends the base Command class.
 */
export default class CreatePostCommand extends Command {
    /**
     * Creates an instance of the CreatePostCommand class.
     * @param {string} postId - The unique identifier for the post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {string} price - The price of the post.
     * @param {string} location - The location of the post.
     * @param {string} userId - The unique identifier of the user creating the post.
     * @param {string} category - The category of the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     */
    constructor(
        public readonly postId: string,
        public readonly title: string,
        public readonly description: string,
        public readonly price: string,
        public readonly location: string,
        public readonly userId: string,
        public readonly category: string,
        public readonly photoUrl: string
    ) {
        super();
    }
}
