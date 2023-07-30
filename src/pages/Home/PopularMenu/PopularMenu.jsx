import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popularItem = data.filter(item => item.category === "popular")
                setMenu(popularItem);
            })
    }, [])
    return (
        <>
            <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-6 w-[90%] mx-auto mb-24">
                {
                    menu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </>
    );
};

export default PopularMenu;