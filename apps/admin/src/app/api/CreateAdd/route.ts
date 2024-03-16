import { NextApiRequest, NextApiResponse } from 'next';
import CreateAddHandler from '@repo/mercadolocalpr-core/CreateAddHandler';
export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    // Logic for creating the add
    const add = req.body.add;
    console.log(req.body)
    // Create a new instance of CreateAddHandler
    const createAddHandler = new CreateAddHandler(add);

    try {
        // Perform the necessary actions to create the add
        createAddHandler.handle
        // Return a success response
        res.status(200).json({ message: 'Add created successfully' });
    } catch (error) {
        // Return an error response if something goes wrong
        res.status(500).json({ message: 'An error occurred while creating the add' });
    }
}