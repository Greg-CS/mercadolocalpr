import * as values from "../../shared/domain/Values";

/**
 * Represents the unique identifier for a Post.
 * It extends the base Id class from the values module.
 */
export class PostId extends values.Id {
    /**
     * Creates an instance of the PostId class.
     * @param {string} id - The unique identifier for the Post.
     */
    constructor(public readonly id: string) {
        super();
    }
}

/**
 * Represents information about a Post.
 * It extends the base ValueObject class from the values module.
 */
export class PostInfo extends values.ValueObject {
    private static MINIMUM_TITLE_LENGTH = 10;
    private static MINIMUM_LOCATION_LENGTH = 10;
    private static MINIMUM_DESCRIPTION_LENGTH = 10;

    /**
     * Creates an instance of the PostInfo class.
     * @param {string} title - The title of the Post.
     * @param {string} photoUrl - The URL of the photo associated with the Post.
     * @param {string} location - The location of the Post.
     * @param {string} description - The description of the Post.
     * @throws {Error} - Throws an error if the title, location, or description length is below the minimum required.
     */
    constructor(
        public readonly title: string,
        public readonly photoUrl: string,
        public readonly location: string,
        public readonly description: string,
    ) {
        super();

        if (title.length < PostInfo.MINIMUM_TITLE_LENGTH) {
            throw new Error(`Title must have at least ${PostInfo.MINIMUM_TITLE_LENGTH} characters.`);
        }

        if (location.length < PostInfo.MINIMUM_LOCATION_LENGTH) {
            throw new Error(`Location must have at least ${PostInfo.MINIMUM_LOCATION_LENGTH} characters.`);
        }

        if (description.length < PostInfo.MINIMUM_DESCRIPTION_LENGTH) {
            throw new Error(`Description must have at least ${PostInfo.MINIMUM_DESCRIPTION_LENGTH} characters.`);
        }

        this.title = title;
        this.location = location;
        this.photoUrl = photoUrl;
        this.description = description;
    }
}

/**
 * Represents the unique identifier for the category of a Post.
 * It extends the base Id class from the values module.
 */
export class PostCategoryId extends values.Id {
    /**
     * Creates an instance of the PostCategoryId class.
     * @param {string} id - The unique identifier for the Post category.
     */
    constructor(public readonly id: string) {
        super();
    }
}

/**
 * Represents the price information for a Post.
 * It extends the base ValueObject class from the values module.
 */
export class PostPrice extends values.ValueObject {
    public readonly price: number;

    /**
     * Creates an instance of the PostPrice class.
     * @param {string} price - The price value for the Post.
     * @throws {Error} - Throws an error if the provided price is not a valid number.
     */
    constructor(price: string) {
        super();
        try {
            this.price = Number(price);
        } catch (err) {
            throw new Error(`Price '${price}' is not a valid price.`);
        }
    }
}

/**
 * Represents the unique identifier for a User.
 * It extends the base Id class from the values module.
 */
export class SellerId extends values.Id {
    /**
     * Creates an instance of the SellerId class.
     * @param {string} id - The unique identifier for the User.
     */
    constructor(public readonly id: string) {
        super();
    }

    /**
     * Checks if this SellerId is equal to another SellerId.
     * @param {SellerId} other - The other SellerId to compare.
     * @returns {boolean} - True if the SellerId values are equal, otherwise false.
     */
    public equals(other: SellerId): boolean {
        return this.id === other.id;
    }
}

export class ProfileId extends values.Id {
    /**
     * Creates an instance of the ProfileId class.
     * @param {string} id - The unique identifier for the User.
     */
    constructor(public readonly id: string) {
        super();
    }

    /**
     * Checks if this ProfileId is equal to another ProfileId.
     * @param {ProfileId} other - The other ProfileId to compare.
     * @returns {boolean} - True if the ProfileId values are equal, otherwise false.
     */
    public equals(other: ProfileId): boolean {
        return this.id === other.id;
    }
}

export class updated_at extends values.ValueObject {
    public readonly updated_at: Date;

    constructor(updated_at: Date) {
        super();
        this.updated_at = updated_at;
    }
}

export class username extends values.ValueObject {
    public readonly username: string;

    constructor(username: string) {
        super();
        this.username = username;
    }
}

export class description extends values.ValueObject {
    public readonly description: string;

    constructor(description: string) {
        super();
        this.description = description
    }
}

export class profile_image_url extends values.ValueObject {
    public readonly profile_image_url: string;

    constructor(profile_image_url: string) {
        super();
        this.profile_image_url = profile_image_url
    }
}

export class banner_image_url extends values.ValueObject {
    public readonly banner_image_url: string;

    constructor(banner_image_url: string) {
        super();
        this.banner_image_url = banner_image_url
    }
}

export class email extends values.ValueObject {
    public readonly email: string;

    constructor(email: string) {
        super();
        this.email = email
    }
}

