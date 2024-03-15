import { NextApiRequest, NextApiResponse } from 'next';
import approvePostHandler from '@repo/mercadolocalpr-core/ApprovePostHandler';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        // Logic for approving the post
        const postId = req.body.postId;

        // Create a new instance of ApprovePostHandler
        const approvePostHandler = new ApprovePostHandler();

        try {
            // Perform the necessary actions to approve the post
            await approvePostHandler.approvePost(postId);

            // Return a success response
            res.status(200).json({ message: 'Post approved successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while approving the post' });
        }
    } else {
        // Return an error response for unsupported methods
        res.status(405).json({ message: 'Method Not Allowed' });
    }
}