"use client"
import { PostContent } from "../../components/PostContent/PostContent";
import DeletePost from "@repo/mercadolocalpr-core/DeletePost";

export default function Page({ params }: { params: { id: number } }): React.JSX.Element {

    const postId = params.id;

    return (
    <>
        <h1>User Post {postId}</h1>
        <div className="bg-white text-black m-10 rounded-xl">
            <PostContent id={postId} />
        </div>
        <div className="flex bg-white text-black m-10 rounded-xl p-10 justify-between">
            <button className="btn btn-square w-4/12 bg-green-500 text-white">
                Approve
            </button>
            <button onClick={() => new DeletePost(postId.toString(), '1')} className="btn btn-square w-4/12 bg-red-500 text-white">
                Delete
            </button>
        </div>
    </>
    );
}
