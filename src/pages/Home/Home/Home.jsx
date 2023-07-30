import NavBar from "../../../components/NavBar/NavBar";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <SectionTitle heading="ORDER ONLINE" subHeading="---From 11:00am to 10:00pm---">

            </SectionTitle>
            <Category></Category>
            <PopularMenu></PopularMenu>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;