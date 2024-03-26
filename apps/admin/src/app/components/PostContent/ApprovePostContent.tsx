import React from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export const ApprovePostContent = ({ id }: { id: number }) => {

    const ApprovePost = async (id: number) => {
            try {
                const response = await axios.post(`/api/approvePost/${id}`, { postId: id });
                const data = response.data;
                console.log(data);
            } catch (error) {
                toast.error('An error occurred while approving the post');
            }
    }

    const DeletePost = async (id: number) => {
        try {
            const response = await axios.delete(`/api/deletePost/${id}`);
            const data = response.data;
            console.log(data);
        } catch (error) {
            toast.error('An error occurred while deleting the post');
        }
    }

  return (
    <>
        <div className="flex bg-white text-black m-10 rounded-xl p-10 justify-between">
            <button onClick={() => ApprovePost(id)} className="btn btn-square w-5/12 bg-green-500 text-white">
                Approve
            </button>
            <button onClick={() => DeletePost(id)} className="btn btn-square w-5/12 bg-red-500 text-white">
                Delete
            </button>
        </div>
        <ToastContainer />
    </>
  )
}
