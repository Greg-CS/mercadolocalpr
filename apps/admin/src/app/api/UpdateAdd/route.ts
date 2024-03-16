import { NextApiRequest, NextApiResponse } from 'next';
import AddModerateHandler from '@repo/mercadolocalpr-core/AddModerateHandler';
export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
        // Logic for moderating the add
        const addId = req.body.addId;
        console.log(req.body)
        // Create a new instance of AddModerateHandler
        const addModerateHandler = new AddModerateHandler(addId);

        try {
            // Perform the necessary actions to moderate the add
            addModerateHandler.handle
            // Return a success response
            res.status(200).json({ message: 'Add moderated successfully' });
        } catch (error) {
            // Return an error response if something goes wrong
            res.status(500).json({ message: 'An error occurred while moderating the add' });
        }
    }