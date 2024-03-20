import Command from "../../../shared/application/Command";

/**
 * Command class representing the intention to create a new add in the application.
 * This command carries the necessary data for creating a add, such as title, description, etc.
 * It extends the base Command class.
 */
export default class CreateAddCommand extends Command {
    /**
     * The unique identifier of the add being created.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly postId: string;

    /**
     * The title of the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly title: string;

    /**
     * The description of the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly description: string;

    /**
     * The price of the item being sold in the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly price: string;

    /**
     * The location or region associated with the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly location: string;

    /**
     * The unique identifier of the seller creating the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly sellerId: string;

    /**
     * The URL of the photo associated with the add.
     *
     * @public
     * @readonly
     * @type {string}
     */
    public readonly photoUrl: string;

    /**
     * Creates an instance of CreateAddCommand.
     *
     * @constructor
     * @param {string} postId - The unique identifier of the add being created.
     * @param {string} title - The title of the add.
     * @param {string} description - The description of the add.
     * @param {string} price - The price of the item being sold in the add.
     * @param {string} location - The location or region associated with the add.
     * @param {string} sellerId - The unique identifier of the seller creating the add.
     * @param {string} photoUrl - The URL of the photo associated with the add.
     */
    constructor(
        postId: string,
        title: string,
        description: string,
        price: string,
        location: string,
        sellerId: string,
        photoUrl: string
    ) {
        super();
        this.postId = postId;
        this.title = title;
        this.description = description;
        this.price = price;
        this.location = location;
        this.sellerId = sellerId;
        this.photoUrl = photoUrl;
    }
}
