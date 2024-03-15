// pages/api/admin.js

import { NextApiRequest, NextApiResponse } from 'next';
import DeleteAddReadModelHandler from '@repo/mercadolocalpr-core/DeleteAddReadModelHandler';
import AddReadModelAdmins from '@repo/mercadolocalpr-core/AddReadModelAdmins';
import { AddDeletedEvent } from '@repo/mercadolocalpr-core/AddDeletedEvent';
// @repo/mercadolocalpr-core/application/DeletePost/DeletePostCommand

// Initialize DeleteAddReadModelHandler with AddReadModelAdmins
const handler = new DeleteAddReadModelHandler(new AddReadModelAdmins());

export default async function deleteAdd(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    try {
      // Create a new AddDeletedEvent with the addId from the request body
      const event = new AddDeletedEvent(req.body.addId);

      // Handle the event
      await handler.handle(event);

      // Send a success response
      res.status(200).json({ message: 'Add deleted successfully' });
    } catch (error) {
      // Send an error response
      res.status(500).json({ error: 'An error occurred while deleting the add' });
    }
  } else {
    // If the request method is not DELETE, return a 405 Method Not Allowed response
    res.status(405).json({ error: 'Method not allowed' });
  }
}