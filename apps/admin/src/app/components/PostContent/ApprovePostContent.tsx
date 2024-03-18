import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
export const ApprovePostContent = () => {

    const ApprovePost = async (number: number) => {
        // e.preventDefault();
        try {
            const response = await fetch('/api/approvePost', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ number: 1 })
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            toast.error('An error occurred while approving the post');
        }
    }

  return (
    <>
        <div className="flex bg-white text-black m-10 rounded-xl p-10 justify-between">
            <button onClick={() => ApprovePost(1)} className="btn btn-square w-4/12 bg-green-500 text-white">
                Approve
            </button>
            <button onClick={() => console.log("lol")} className="btn btn-square w-4/12 bg-red-500 text-white">
                Delete
            </button>
        </div>
        <ToastContainer />
    </>
  )
}
