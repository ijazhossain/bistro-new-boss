import Cover from "../Shared/Cover/Cover";
import bgImg from '../../assets/menu/banner3.jpg'
const Menu = () => {
    return (
        <div>
            <Cover
                img={bgImg}
                heading="our menu"
                subHeading="Would you like to try a dish?"
                height="750px"
                font="88px"
            ></Cover>
            <h1>This is menu</h1>
        </div>
    );
};

export default Menu;