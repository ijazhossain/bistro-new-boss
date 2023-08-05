/* eslint-disable react/prop-types */
const FoodCart = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="card card-compact w-96 bg-base-100  rounded-none">
            <div className="relative">
                <figure>
                    <img className="w-full" src={image} alt="Shoes" />

                </figure>
                <p className=" bg-black text-white font-semibold inline-block px-[22px] py-[11px] absolute top-5 right-5">$ {price}</p>
            </div>
            <div className="card-body bg-[#F3F3F3]">
                <h2 className="text-[24px] font-semibold text-center mt-[32px] mb-2">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="text-[#BB8506] h-16 border-b-4 border-[#BB8506] rounded-lg px-[30px] bg-[#E8E8E8] mt-6 text-xl block mx-auto hover:bg-black ">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;