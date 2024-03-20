import { NextApiRequest, NextApiResponse } from 'next';
import CreateAddCommand from '@repo/mercadolocalpr-core/CreateAddCommand';
import messageBus from '@repo/mercadolocalpr-core/bootstrap';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
    const createAddCommand = new CreateAddCommand(req.body.title, req.body.description, req.body.price, req.body.category, req.body.sellerId, req.body.image, req.body);
    let status = 200;
    let data = {};
    try {
        let result = await messageBus.execute(createAddCommand);
        if (result.isFailure()) {
            data = { error: result.errorMessage };
            status = 400;
        }
    } catch (error) {
        status = 500;
        data = { error: 'Server Error 500' };
        console.log(error);
    }
    return Response.json(data, { status });
}