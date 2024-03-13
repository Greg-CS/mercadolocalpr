/**
 * Represents a model for a add.
 */
export default class AddModel {
    /**
     * @type {string} - The unique identifier of the add.
     */
    public id: string;

    /**
     * @type {string} - The title of the add.
     */
    public title: string;

    /**
     * @type {string} - The description of the add.
     */

    public description: string;

    /**
     * @type {number} - The price of the add.
     */

    public price: number;

    /**
     * @type {string} - The unique identifier of the user who created the post.
     */
    public sellerId: string;

    /**
     * @type {string} - The URL of the photo associated with the post.
     */
    public photoUrl: string;

    /**
     * @type {boolean} - Flag indictating if the post was moderated.
     */
    public isModerated: boolean;

    /**
     * @type {boolean} - Flag indictating if the add was paid.
     */
    public isPaid: boolean;

    /**
     * @type {string} - The timestamp when the post was created.
     */
    public createdAt: string;

    
    /**
     * Creates an instance of the PostModel.
     * @param {string} id - The unique identifier of the post.
     * @param {string} title - The title of the post.
     * @param {string} description - The description of the post.
     * @param {number} price - The price of the post.
     * @param {string} sellerId - The unique identifier of the user who created the post.
     * @param {string} photoUrl - The URL of the photo associated with the post.
     * @param {boolean} isModerated - Flag indictating if the post was moderated.
     * @param {boolean} isPaid - Flag indictating if the add was paid. 
     * @param {string} createdAt - The timestamp when the add was created.
    */

        constructor(
        id: string,
        title: string,
        description: string,
        price: number,
        sellerId: string,
        photoUrl: string,
        isModerated: boolean,
        isPaid: boolean,
        createdAt: string,
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.sellerId = sellerId;
        this.photoUrl = photoUrl;
        this.isModerated = isModerated;
        this.isPaid = isPaid;
        this.createdAt = createdAt;
    }
}