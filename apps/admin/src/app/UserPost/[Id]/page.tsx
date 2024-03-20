"use client"
import { ApprovePostContent } from "../../components/PostContent/ApprovePostContent";
import { PostContent } from "../../components/PostContent/PostContent";

export default function Page({ params }: { params: { id: number } }) {

    const postId = params.id;

    return (
    <>
        <h1>User Post {postId}</h1>
        <div className="bg-white text-black m-10 rounded-xl">
            <PostContent id={postId} />
        </div>
        <ApprovePostContent id={postId}/>
    </>
    );
}
