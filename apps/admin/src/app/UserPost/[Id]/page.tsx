import { PostContent } from "../../components/PostContent/PostContent";
import DeletePostCommand from "@repo/mercadolocalpr-core/application/DeletePost/DeletePostCommand";
import { Card } from "@repo/ui/card"
export default function Page({ params }: { params: { id: number } }): React.JSX.Element {
    return (
    <>
        <h1>User Post {params.id}</h1>
        <div className="bg-white text-black m-10 rounded-xl">
            <PostContent id={params.id} />
        </div>
        <div className="flex bg-white text-black m-10 rounded-xl p-10 justify-between">
            <button className="btn btn-square w-4/12 bg-green-500 text-white">
                Approve
            </button>
            <button className="btn btn-square w-4/12 bg-red-500 text-white">
                Delete
            </button>
        </div>
    </>
    );
}
