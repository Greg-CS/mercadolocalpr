import Command from "../../../shared/application/Command";

/**
 * Command class representing the intention to delete a add in the application.
 * This command carries the necessary data for deleting a add, such as the add ID and user ID.
 * It extends the base Command class.
 */
export default class DeleteAddCommand extends Command {
    /**
     * The unique identifier of the add to be deleted.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly addId: string;

    /**
     * The unique identifier of the seller who owns the add to be deleted.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly sellerId: string;

    /**
     * Creates an instance of DeletePostCommand.
     *
     * @constructor
     * @param {string} addId - The unique identifier of the add to be deleted.
     * @param {string} sellerId - The unique identifier of the seller who owns the add to be deleted.
     */
    constructor(addId: string, sellerId: string) {
        super();
        this.addId = addId;
        this.sellerId = sellerId;
    }
}