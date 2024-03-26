import * as values from "../../shared/domain/Values";

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

export  class AddId extends values.Id {
    constructor(public readonly id: string) {
        super();
    }
}

export class AddInfo extends values.ValueObject {
    private static MINIMUM_TITLE_LENGTH = 10;
    private static MINIMUM_LOCATION_LENGTH = 10;
    private static MINIMUM_DESCRIPTION_LENGTH = 10;

    constructor(
        public readonly title: string,
        public readonly photoUrl: string,
        public readonly location: string,
        public readonly description: string,
    ) {
        super();

        if (title.length < AddInfo.MINIMUM_TITLE_LENGTH) {
            throw new Error(`Title must have at least ${AddInfo.MINIMUM_TITLE_LENGTH} characters.`);
        }

        if (location.length < AddInfo.MINIMUM_LOCATION_LENGTH) {
            throw new Error(`Location must have at least ${AddInfo.MINIMUM_LOCATION_LENGTH} characters.`);
        }

        if (description.length < AddInfo.MINIMUM_DESCRIPTION_LENGTH) {
            throw new Error(`Description must have at least ${AddInfo.MINIMUM_DESCRIPTION_LENGTH} characters.`);
        }

        this.title = title;
        this.location = location;
        this.photoUrl = photoUrl;
        this.description = description;
    }
}

export class AddCategoryId extends values.Id {
    constructor(public readonly id: string) {
        super();
    }
}

export class AddPrice extends values.ValueObject {
    public readonly price: number;

    constructor(price: string) {
        super();
        try {
            this.price = Number(price);
        } catch (err) {
            throw new Error(`Price '${price}' is not a valid price.`);
        }
    }
}

