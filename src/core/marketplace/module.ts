import Module from "../shared/module";
import CreatePostCommand from "./application/CreatePost/CreatePostCommand";
import CreatePostHandler from "./application/CreatePost/CreatePostHandler";
import CreatePostReadModelHandler from "./application/CreatePost/CreatePostReadModelHandler";
import DeletePostCommand from "./application/DeletePost/DeletePostCommand";
import { DeletePostHandler } from "./application/DeletePost/DeletePostHandler";
import DeletePostReadModelHandler from "./application/DeletePost/DeletePostReadModelHandler";
import UnitOfWork from "./application/UnitOfWork";
import { PostCreatedEvent, PostDeletedEvent } from "./domain/Events";
import PostReadModelStore from "./domain/PostReadModelStore";

/**
 * Represents the PostModule, extending the base Module class.
 */
export default class PostModule extends Module {
    /**
     * Creates an instance of the PostModule.
     * @param {UnitOfWork} unitOfWork - The UnitOfWork instance for managing database operations.
     * @param {PostReadModelStore} postModels - The store for managing Post read models.
     */
    constructor(unitOfWork: UnitOfWork, private postModels: PostReadModelStore) {
        // Call the constructor of the base class (Module).
        super(unitOfWork);

        // Commands
        this.registerCommand(CreatePostCommand.name, new CreatePostHandler(unitOfWork));
        this.registerCommand(DeletePostCommand.name, new DeletePostHandler(unitOfWork));

        // Events
        this.registerEvent(PostCreatedEvent.name, new CreatePostReadModelHandler(postModels));
        this.registerEvent(PostDeletedEvent.name, new DeletePostReadModelHandler(postModels));
    }
}
