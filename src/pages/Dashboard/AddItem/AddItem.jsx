import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;
const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit } = useForm()
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${image_hosting_token}`
    const onSubmit = (data) => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])
        fetch(image_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                // console.log(imgResponse);
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, price, category, recipe } = data;
                    const newItem = { name, price: parseFloat(price), category, recipe, image: imgURL };
                    console.log(newItem);
                    axiosSecure.post('/menu', newItem)
                        .then(data => {
                            console.log('newItem', data.data);
                            if (data.data.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'New item added successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
            })
    }

    return (
        <div className="w-[80%] mx-auto ">
            <SectionTitle heading="ADD AN ITEM" subHeading="---What's new?---"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full bg-[#F3F3F3] p-[50px]">

                <label className='text-[20px] text-[#444]' htmlFor="name">Recipe name*</label>
                <input  {...register("name", { required: true })} className='px-6 py-5 rounded-lg' type="text" placeholder="Recipe name" />
                <div className="flex items-center justify-between gap-5">
                    <div className="flex-1">
                        <label className="block mb-4 text-[20px] text-[#444]" htmlFor="category">Category*</label>
                        <select {...register("category", { required: true })} name="category" className='px-6 py-5 rounded-lg w-full'>
                            <option value="">Select Category</option>
                            <option value="desserts">Desserts</option>
                            <option value="pizza">Pizza</option>
                            <option value="salad">Salad</option>
                            <option value="soup">Soup</option>
                            <option value="drinks">Drinks</option>
                            <option value="pasta">Pasta</option>
                        </select>
                    </div>
                    <div className="flex-1">
                        <label className="block mb-4 text-[20px] text-[#444]" htmlFor="category">Price*</label>
                        <input {...register("price", { required: true })} className='px-6 py-5 rounded-lg w-full' type="number" placeholder="Price" />
                    </div>
                </div>
                <label className="block mb-4 text-[20px] text-[#444]" htmlFor="category">Recipe Details*</label>
                <textarea {...register("recipe", { required: true })} className='px-6 py-5 rounded-lg w-full' type="text" placeholder="Recipe Details" rows="10"></textarea>

                <input {...register("image", { required: true })} type="file" className="file-input w-full max-w-xs" />
                <input className="w-[180px] h-[56px] text-xl text-white mt-3" style={{
                    backgroundImage: 'linear-gradient(90deg, #835D23 0%, #B58130 100%)'
                }} type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;