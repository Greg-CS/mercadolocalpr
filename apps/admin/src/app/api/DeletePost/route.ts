import { NextApiRequest, NextApiResponse } from 'next';
import { DeletePostHandler } from '@repo/mercadolocalpr-core/DeletePostHandler';
export default function DELETE(req: NextApiRequest, res: NextApiResponse) {
        // Logic for deleting the post
        const postId = req.body.postId;
        // Create a new instance of DeletePostHandler
        const deletePostHandler = new DeletePostHandler(postId);
        try {
            // Perform the necessary actions to delete the post
            deletePostHandler.handle;
            // Return a success response
            res.status(200).json({ message: 'Post deleted successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while deleting the post' });
        }
}