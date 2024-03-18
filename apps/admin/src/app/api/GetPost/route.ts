import { NextApiRequest, NextApiResponse } from 'next';
import GetPostHandler from '@repo/mercadolocalpr-core/GetPostHandler';
export async function GET(req: NextApiRequest, res: NextApiResponse) {
        // Logic for getting the post
        const postId = req.body.postId;
        console.log(req.body)
        // Create a new instance of GetPostHandler
        const getPostHandler = new GetPostHandler();

        try {
            // Perform the necessary actions to get the post
            getPostHandler.handle
            // Return a success response
            res.status(200).json({ message: 'Post retrieved successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while retrieving the post' });
        }
    }