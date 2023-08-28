import { useNavigate } from "react-router-dom";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ item, title }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className="grid lg:grid-cols-2 gap-6 w-[90%] mx-auto mb-24">
                {
                    item.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
            <button onClick={() => navigate(`/order/${title}`)} className="h-16 border-b-4 border-black rounded-lg px-[30px] mb-8  block mx-auto">
                Order Now
            </button>
        </>
    );
};

export default MenuCategory;