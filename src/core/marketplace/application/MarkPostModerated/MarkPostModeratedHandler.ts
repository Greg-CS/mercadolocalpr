import CommandHandler from "@/core/shared/application/CommandHandler";
import MarkPostModeratedCommand from "./MarkPostModeratedCommand";
import UnitOfWork from "../UnitOfWork";
import PostNotFoundError from "../../domain/Exceptions/PostNotFoundError";
import Post from "../../domain/Entities/Post";



export default class MarkPostModeratedHandler extends CommandHandler {
    constructor(private unitOfWork: UnitOfWork) {
        super();
    }
    
    public async handle(cmd: MarkPostModeratedCommand): Promise<void> {
        let events = await this.unitOfWork.posts.loadEvents(cmd.postId);

        // If no events are found, the post does not exist
        if (events.length === 0) throw new PostNotFoundError();

        // Create a new post entity using the loaded events
        let post = new Post(events);

        // Mark the post as moderated.
        post.markModerated(cmd.moderatedTitle, cmd.moderatedDescription);

        // Save the modified post entity using the unit of work
        this.unitOfWork.save(post);
    }
}