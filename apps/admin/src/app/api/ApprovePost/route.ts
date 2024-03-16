import { NextApiRequest, NextApiResponse } from 'next';
import ApprovePostHandler from '@repo/mercadolocalpr-core/ApprovePostHandler';

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
        // Logic for approving the post
        const postId = req.body.postId;
        console.log(req.body)
        // Create a new instance of ApprovePostHandler
        const approvePostHandler = new ApprovePostHandler(postId);

        try {
            // Perform the necessary actions to approve the post
            approvePostHandler.handle
            // Return a success response
            res.status(200).json({ message: 'Post approved successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while approving the post' });
        }
    }