import Cover from "../Shared/Cover/Cover";
import bgImg from '../../assets/menu/banner3.jpg'
import MenuCategory from "./MenuCategory/MenuCategory";
import { useMenu } from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import dessertImg from '../../../src/assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../src/assets/menu/pizza-bg.jpg'
import saladImg from '../../../src/assets/menu/salad-bg.jpg'
import soupImg from '../../../src/assets/menu/soup-bg.jpg'
const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const dessert = menu.filter(item => item.category === 'dessert');
    const pizza = menu.filter(item => item.category === 'pizza');
    const salad = menu.filter(item => item.category === 'salad');
    const soup = menu.filter(item => item.category === 'soup');
    return (
        <>
            <Cover
                img={bgImg}
                heading="our menu"
                subHeading="Would you like to try a dish?"
                height="750px"
                font="88px"
                text="24px"
            ></Cover>
            <SectionTitle subHeading="---Don't miss---" heading="TODAY'S OFFER"></SectionTitle>
            <MenuCategory item={offered}></MenuCategory>
            <Cover
                img={dessertImg}
                heading="DESSERTS"
                subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                height="650px"
                font="45px"
                text="16px"
            ></Cover>
            <div className="mt-24">
                <MenuCategory title="desserts" item={dessert}></MenuCategory>
            </div>
            <Cover
                img={pizzaImg}
                heading="PIZZA"
                subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                height="650px"
                font="45px"
                text="16px"
            ></Cover>
            <div className="mt-24">
                <MenuCategory title="pizza" item={pizza}></MenuCategory>
            </div>
            <Cover
                img={saladImg}
                heading="SALADS"
                subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                height="650px"
                font="45px"
                text="16px"
            ></Cover>
            <div className="mt-24">
                <MenuCategory title="salads" item={salad}></MenuCategory>
            </div>
            <Cover
                img={soupImg}
                heading="SOUPS"
                subHeading="Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                height="650px"
                font="45px"
                text="16px"
            ></Cover>
            <div className="mt-24">
                <MenuCategory title="soup" item={soup}></MenuCategory>
            </div>

        </>
    );
};

export default Menu;