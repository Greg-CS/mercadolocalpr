import PostRepository from "@/core/marketplace/domain/PostRepository";
import SBPostRepository from "./SBPostRepository";
import PostReadModelStore from "../../domain/PostReadModelStore";
import SBPostReadModel from "./SBPostReadModelStore";

/**
 * Factory function for creating an instance of the PostRepository.
 * @param {any} db - The database configuration object.
 * @returns {PostRepository} - An instance of the PostRepository.
 */
export function getPostRepository(db: any): PostRepository {
    return new SBPostRepository(db.supabaseUrl, db.supabaseKey);
}

/**
 * Factory function for creating an instance of the PostReadModelStore.
 * @param {any} db - The database configuration object.
 * @returns {PostReadModelStore} - An instance of the PostReadModelStore.
 */
export function getPostModels(db: any): PostReadModelStore {
    return new SBPostReadModel(db.supabaseUrl, db.supabaseKey);
}
