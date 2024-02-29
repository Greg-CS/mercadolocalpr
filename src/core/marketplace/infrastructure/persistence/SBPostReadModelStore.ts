import { SupabaseClient } from "@/core/shared/infrastructure/persistence/supabase";
import PostReadModelStore from "../../domain/PostReadModelStore";
import PostModel from "../../domain/Models/PostModel";

/**
 * Supabase-backed implementation of the PostReadModelStore interface.
 * Extends the SupabaseClient class for database interaction.
 */
export default class SBPostReadModel extends SupabaseClient implements PostReadModelStore {
    
    /**
     * Adds a PostModel to the Supabase database.
     * @param {PostModel} post - The PostModel instance to be added.
     * @returns {Promise<void>} - A promise that resolves once the add operation is complete.
     */
    public async add(post: PostModel): Promise<void> {
        const supabase = this.getClient('marketplace');

        const { error } = await supabase.from('post_view').insert({
            uuid: post.id,
            created_at: post.createdAt,
            title: post.title,
            description: post.description,
            category: post.category,
            price: post.price,
            location: post.location,
            user_id: post.sellerId,
            photo_url: post.photoUrl,
            is_moderated: post.isModerated,
        });
    }

    /**
     * Deletes a PostModel from the Supabase database based on its unique identifier.
     * @param {string} postId - The unique identifier of the PostModel to be deleted.
     * @returns {Promise<void>} - A promise that resolves once the delete operation is complete.
     */
    public async delete(postId: string): Promise<void> {
        const supabase = this.getClient('marketplace');

        const { error } = await supabase.from('post_view')
                                        .delete()
                                        .eq('uuid', postId);
        
    }
}
