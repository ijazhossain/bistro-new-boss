/* eslint-disable react/prop-types */
import MenuItems from "../../Shared/MenuItems/MenuItems";

const MenuCategory = ({ item }) => {
    return (
        <div className="grid lg:grid-cols-2 gap-6 w-[90%] mx-auto mb-24">
            {
                item.map(item => <MenuItems
                    key={item._id}
                    item={item}
                ></MenuItems>)
            }
        </div>
    );
};

export default MenuCategory;