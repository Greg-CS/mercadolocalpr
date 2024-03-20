import { NextApiRequest, NextApiResponse } from 'next';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

import messageBus from '@repo/mercadolocalpr-core/bootstrap';

import ApprovePostCommand from '@repo/mercadolocalpr-core/ApprovePostCommand';

export default async function PUT(req: NextApiRequest, res: NextApiResponse) {
        const supabase = createRouteHandlerClient({ cookies });
    
        // const { data, error } = await supabase.from('posts').update({ isApproved: true }).eq('id', req.body.postId); // Update the post to be approved
        // Logic for approving the post
        const postId = req.body.postId;
        // Create a new instance of ApprovePostCommand
        const approvePostHandler = new ApprovePostCommand(postId);

        let status = 200;
        let dataVariable = {};
        

        try {
            // Perform the necessary actions to approve the post
            let result = await messageBus.execute(approvePostHandler);

            if(result.isFailure()) {
                // Return an error response if the post could not be approved
                dataVariable = { error: result.errorMessage };
                status = 400;
            }

        } catch (error) {
            // Return an error response if something goes wrong
            status = 500;
            dataVariable = { error: 'Server Error 500'};
            console.log(error); // TODO: Log the error to a file somewhere.
        }

        return Response.json(dataVariable, { status });
    }