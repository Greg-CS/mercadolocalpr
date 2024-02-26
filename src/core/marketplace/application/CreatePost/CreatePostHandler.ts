import CommandHandler from "@/core/shared/application/CommandHandler";
import CreatePostCommand from "./CreatePostCommand";
import Post from "@/core/marketplace/domain/Entities/Post";
import UnitOfWork from "@/core/marketplace/application/UnitOfWork";

/**
 * Command handler for processing the CreatePostCommand and creating a new post.
 * It extends the base CommandHandler class.
 */
export default class CreatePostHandler extends CommandHandler {
    /**
     * Creates an instance of the CreatePostHandler class.
     * @param {UnitOfWork} unitOfWork - The unit of work for managing transactions.
     */
    constructor(private unitOfWork: UnitOfWork) {
        super();
    }

    /**
     * Handles the CreatePostCommand by creating a new post entity.
     * If the post with the specified ID already exists, the command is ignored.
     * @param {CreatePostCommand} cmd - The CreatePostCommand to be handled.
     */
    public async handle(cmd: CreatePostCommand): Promise<void> {
        // Check if a post with the specified ID already exists
        let existingPostEvents = await this.unitOfWork.posts.loadEvents(cmd.postId);

        if (existingPostEvents.length === 0) {
            // Create a new post entity using the provided data
            let post = Post.create(
                cmd.postId,
                cmd.title,
                cmd.description,
                cmd.price,
                cmd.location,
                cmd.userId,
                cmd.category,
                cmd.photoUrl,
            );

            // Save the new post entity using the unit of work
            await this.unitOfWork.save(post);
        }
    }
}