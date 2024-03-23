// PostRepository.ts
import config from '../../../bootstrap/config';

import { createClient } from '@supabase/supabase-js';
import Post from '../../../marketplace/domain/Entities/Post';

export class PostRepository {
  private supabaseClient;

  constructor() {
    this.supabaseClient = createClient(
      config.marketplace.db.supabaseUrl,
      config.marketplace.db.supabaseKey
    );
  }

  async fetchPostsFromSupabase(): Promise<Post[]> {
    const { data, error } = await this.supabaseClient
      .from('posts')
      .select('*');

    if (error) {
      throw new Error(`Error fetching posts from Supabase: ${error.message}`);
    }

    // Map the fetched data to Post objects
    return data.map(postData => this.mapPostDataToPost(postData));
  }

  private mapPostDataToPost(postData: any): Post {
    // Map the fetched post data to a Post object
    return {
      id: postData.id,
      title: postData.title,
      description: postData.description,
      price: postData.price,
      location: postData.location,
      photo_url: postData.photo_url,
      user_id: postData.user_id,
      category: postData.category,
      condition: postData.condition,
      isApproved: postData.isApproved,
      createdAt: new Date(postData.created_at),
      // Map other properties as needed
    };
  }
}