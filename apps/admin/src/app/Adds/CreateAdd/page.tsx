import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateAddPage({ params }: { params: { id: number } }) {
    
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        "use server"
        event.preventDefault();
        const title = event.currentTarget.title.valueOf;
        const description = event.currentTarget.description.value;
        // const price = event.currentTarget.price.value;
        // const image = event.currentTarget.image.value;
        // const category = event.currentTarget.category.value;
        // const sellerId = event.currentTarget.sellerId.value;
        // const data = { title, description, price, category, sellerId, image };
        const data = { title, description };
        try {
            const response = await axios.post('/api/CreateAdd', data);
            console.log(response.data);
        } catch (error) {
            toast.error('An error occurred while creating the add');
        }
    }
    
    return (
        <div>
            <div className="p-10 bg-white rounded-lg m-10 text-black">
                <h1 className="font-bold">Ads Create Page</h1>
            </div>

            <div>
                <form onSubmit={onSubmit} className="p-10 bg-white rounded-lg m-10 text-black">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input
                            className="input w-8/12 text-white font-bold p-3"
                            id="title"
                            type="text"
                            placeholder="Title"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            className="input w-8/12 text-white font-bold p-3"
                            id="description"
                            placeholder="Description"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                            Price
                        </label>
                        <input
                            className="input w-8/12 text-white font-bold p-3"
                            id="price"
                            type="text"
                            placeholder="Price"
                        />
                    </div> */}
                    {/* <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
                            Image
                        </label>
                        <input
                            className="input w-8/12 p-3"
                            id="image"
                            type="file"
                            placeholder="Image"
                        />
                    </div> */}
                    <button type="submit" className="btn btn-square w-8/12 bg-green-500 text-white">
                        Create
                    </button>
                </form>
            </div>
            <ToastContainer/>
        </div>
    );
}