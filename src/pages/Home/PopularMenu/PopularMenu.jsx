import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuItems from "../../Shared/MenuItems/MenuItems";
import { useMenu } from "../../../hooks/useMenu";

const PopularMenu = () => {
    const [menu, loading] = useMenu([])
    const popularMenu = menu.filter(item => item.category === 'popular')
    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>
    }
    /* useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const popularItem = data.filter(item => item.category === "popular")
                setMenu(popularItem);
            })
    }, []) */
    return (
        <>
            <SectionTitle heading="FROM OUR MENU" subHeading="---Check it out---"></SectionTitle>
            <div className="grid lg:grid-cols-2 gap-6 w-[90%] mx-auto mb-24">
                {
                    popularMenu.map(item => <MenuItems
                        key={item._id}
                        item={item}
                    ></MenuItems>)
                }
            </div>
        </>
    );
};

export default PopularMenu;