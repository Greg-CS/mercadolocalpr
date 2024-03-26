import ProfileModel from "./Models/ProfileModel";

/**
 * Interface representing a store for managing Profile read models.
 */
export default interface ProfileReadModelStore {
    /** 
    * Adds a Profile read model to the store.
    * @param {ProfileModel} profile - The ProfileModel instance to be added.
    * @returns {Promise<void>} - A promise that resolves once the profile operation is complete.
    */

    add(profile: ProfileModel): Promise<void>;
    
    /**
     * Deletes a Profile read model from the store using its unique identifier.
     * @param {string} profileId - The unique identifier of the Profile read model to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the delete operation is complete.
     */
    delete(profileId: string): Promise<void>;

    /**
     * Get a Profile read model from the store using its unique identifier.
     * @param {string} profileId - The unique identifier of the Profile read model to be deleted.
     * @returns {Promise<ProfileModel>} - A promise that resolves once the get operation is complete.
     */
    get(profileId: string): Promise<ProfileModel|null>;

        /**
     * Update a Profile read model from the store using its unique identifier.
     * @param {string} profileId - The unique identifier of the Profile read model to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the update operation is complete.
     */
    update(profileId: ProfileModel): Promise<void>;
}