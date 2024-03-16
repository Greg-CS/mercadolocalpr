import { NextApiRequest, NextApiResponse } from 'next';
import GetUsersHandler from '@repo/mercadolocalpr-core/GetUsersHandler';
export default function GET(req: NextApiRequest, res: NextApiResponse) {
        // Logic for getting the users
        // Create a new instance of GetUsersHandler
        const getUsersHandler = new GetUsersHandler();
        try {
            // Perform the necessary actions to get the users
            getUsersHandler.handle;
            // Return a success response
            res.status(200).json({ message: 'Users retrieved successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while retrieving the users' });
        }
}