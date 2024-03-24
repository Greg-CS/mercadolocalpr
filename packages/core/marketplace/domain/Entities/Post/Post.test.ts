import {describe, expect, test} from '@jest/globals';
import Post from './Post';
import { PostPrice, SellerId } from './Values';

/**
 * Creates a Post object with optional overrides.
 * This utility function is primarily used within tests to generate Post instances with predefined or overridden properties.
 * 
 * @param {?Object} [overrides] - Optional parameter to override default properties of the Post.
 * @returns {Post} Returns an instance of the Post class.
 */
function getPost(overrides?: any): Post {
    overrides = overrides ? overrides : {};

    const price = overrides.price || '500';
    const postId = overrides.postId || '3c47c658-cf5b-4fbb-b41f-afbd764c6532';
    const locationId = overrides.locationId || 'ee554619-d511-4327-a38e-409e61c1cf35';
    const sellerId = overrides.sellerId || '7aadb97d-1b00-4d6d-a756-f49d05393f8a';
    const categoryId = overrides.categoryId || '792980f3-8bdb-4a05-bb43-9a9e03310609';

    let post = Post.create(
        postId,
        'The title of the post',
        'The description of the post',
        price,
        locationId,
        sellerId,
        categoryId,
        'https://google.com'
    );

    return post;
}


describe('Post Entity', () => {
  test('new Posts are not marked deleted.', () => {
    let post = getPost();
    expect(post.isDeleted).toBe(false);
  });

  test('new Posts are not closed.', () => {
    let post = getPost();
    expect(post.isClosed).toBe(false);
  });

  test('Owner of the post can perform deletion.', () => {
    const sellerId = '6ba1d5bf-9ceb-4997-98fb-fedae33957c9';

    let post = getPost({ sellerId })

    post.delete(new SellerId(sellerId));

    expect(post.isDeleted).toBe(true);
  });

  test('Post NOT deleted if delete is performed by non-seller.', () => {
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId })

    post.delete(new SellerId('7dafcfbf-165a-4b82-9c80-4c24de98cc38'))  // not-seller
    
    expect(post.isDeleted).toBe(false);
  });

  test('Owner of the post can close the post.', () => {
    const sellerId = '6ba1d5bf-9ceb-4997-98fb-fedae33957c9';

    let post = getPost({ sellerId })

    post.close(new SellerId(sellerId));

    expect(post.isClosed).toBe(true);
  });

  test('Post NOT closed if close is performed by non-seller.', () => {
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId })

    post.close(new SellerId('7dafcfbf-165a-4b82-9c80-4c24de98cc38'))  // not-seller
    
    expect(post.isClosed).toBe(false);
  });

  test('Cannot add a comment if the post is deleted.', () => {
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';
    const commentId = '99c5b46a-5b84-4d24-9226-051558511ddb';

    let post = getPost({ sellerId })

    post.delete(new SellerId(sellerId))
    
    expect(function(){
        post.comment(sellerId, commentId, 'The comment of the post.')
    }).toThrowError();
  });

  test('Cannot add a comment if the post is closed.', () => {
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';
    const commentId = '99c5b46a-5b84-4d24-9226-051558511ddb';

    let post = getPost({ sellerId })

    post.close(new SellerId(sellerId))
    
    expect(function(){
        post.comment(sellerId, commentId, 'The comment of the post.')
    }).toThrowError();
  });


  test('Cannot use the same price during a price reduce action.', () => {
    const price = '500';
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId, price })
    
    expect(function(){
        post.reducePrice(new PostPrice(price), new SellerId(sellerId));
    }).toThrowError();
  });

  test('Cannot reduce the price of a closed post.', () => {
    const price = '500';
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId, price })

    post.close(new SellerId(sellerId))
    
    expect(function(){
        post.reducePrice(new PostPrice(price), new SellerId(sellerId));
    }).toThrowError();
  });

  test('Cannot reduce the price of a deleted post.', () => {
    const price = '500';
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId, price })

    post.delete(new SellerId(sellerId));
    
    expect(function(){
        post.reducePrice(new PostPrice(price), new SellerId(sellerId));
    }).toThrowError();
  });

  test('Non-seller cannot reduce the price of a post.', () => {
    const price = '500';
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';
    const nonSellerId = '7dafcfbf-165a-4b82-9c80-4c24de98cc38';

    let post = getPost({ sellerId, price })
    
    expect(function(){
        post.reducePrice(new PostPrice(price), new SellerId(nonSellerId));
    }).toThrowError();
  });

  test('Price is reduced by seller.', () => {
    const price = '500';
    const sellerId = '7aadb97d-1b00-4d6d-a756-f49d05393f8a';

    let post = getPost({ sellerId, price })
    
    post.reducePrice(new PostPrice('250'), new SellerId(sellerId));

    expect(post.getPrice()).toEqual(250)
  });
});
