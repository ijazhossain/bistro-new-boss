import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useMenu } from "../../../hooks/useMenu";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

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
            <MenuCategory item={popularMenu}></MenuCategory>
        </>
    );
};

export default PopularMenu;