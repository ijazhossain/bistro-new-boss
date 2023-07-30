// eslint-disable-next-line react/prop-types
const MenuItems = ({ item }) => {
    // eslint-disable-next-line react/prop-types
    const { name, price, image, recipe } = item
    console.log(item);
    return (
        <div className="flex items-start justify-center gap-8">
            <img style={{ borderRadius: '0px 200px 200px 200px' }} className="w-[118px] " src={image} alt="food image" />
            <div>
                <h3 className="text-xl text-[#151515]">{name} ----------------------</h3>
                <p className="text-[#737373]">{recipe}</p>
            </div>
            <p className="text-lg text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItems;